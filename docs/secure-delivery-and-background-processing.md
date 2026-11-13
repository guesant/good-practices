# Engenharia de releases, supply chain, CSPRNG, probes, migrações e workers

Guia complementar ao [checklist geral](../README.md) e à [preparação para produção](production-readiness-and-operations.md). A abordagem é pragmática: controles críticos são obrigatórios **quando aplicáveis**, recomendações devem ser documentadas e exceções precisam de justificativa verificável.

**P0** = gate de publicação onde aplicável. **P1** = prática forte, considerar antes do deploy. **P2** = maturidade adicional. A classificação é recomendação editorial, não imposição formal de ISO/NIST.

## Glossário de integração, entrega e implantação contínuas

| Termo | Significado | Pergunta que distingue |
| --- | --- | --- |
| Continuous Integration (CI) | Integra mudanças pequenas e executa validações frequentes | O código é integrado e testado automaticamente? |
| Continuous Delivery (CD) | Mantém a versão testada pronta para produção; a liberação pode exigir ato humano | Conseguimos publicar uma versão validada a qualquer momento? |
| Continuous Deployment (CD) | Publica automaticamente toda alteração que passa pelo pipeline até produção | Há deploy em produção sem aprovação manual por release? |

Ambas as duas últimas costumam ser abreviadas como **CD**. Não confundir um workflow chamado `cd.yml` com a prática efetivamente adotada.

## Checklist por controle


### Maturidade de CI, Continuous Delivery e Continuous Deployment

- [ ] **SC-01-01 [P0]** A equipe sabe distinguir **Continuous Integration**, **Continuous Delivery** e **Continuous Deployment**, com exemplos reais do fluxo do projeto.
- [ ] **SC-01-02 [P0]** CI integra alterações pequenas, executa builds, testes e verificações automáticas sem pressupor publicação em produção.
- [ ] **SC-01-03 [P0]** Continuous Delivery mantém uma versão testada e implantável, com etapa de publicação em produção que pode exigir aprovação humana.
- [ ] **SC-01-04 [P0]** Continuous Deployment publica automaticamente alterações aprovadas pelos gates até produção, sem decisão manual de publicação.
- [ ] **SC-01-05 [P0]** A documentação e os workflows usam terminologia correta, sem anunciar Continuous Deployment se deploy de produção exige acionamento manual.
- [ ] **SC-01-06 [P0]** Definir fronteira exata entre build, teste, staging, aprovação, release, entrega e produção; explicitar quais jobs podem escrever em produção.
- [ ] **SC-01-07 [P1]** Documentar gatilhos por PR, push, tag, release, schedule e workflow_dispatch e seus privilégios.
- [ ] **SC-01-08 [P1]** Definir artefato versionado e imutável a ser promovido, evitando recompilar um artefato diferente em cada ambiente.
- [ ] **SC-01-09 [P1]** Separar gate de CI, gate de release e gate de produção, com aprovação e rollback conforme risco.
- [ ] **SC-01-10 [P1]** Treinar revisão de uma PR real para que a equipe explique quem autoriza publicação e como interromper pipeline comprometido.
- [ ] **SC-01-11 [P1]** Avaliar progressive delivery, canary, feature flags e deploy automatizado somente quando mecanismos de observação e rollback forem suficientes.

### Minimum release age, procedência e riscos de supply chain

- [ ] **SC-02-01 [P0]** Inventariar dependências diretas/transitivas, pacotes de build, runners, imagens e scripts de instalação.
- [ ] **SC-02-02 [P0]** Verificar malware/abuso e mudanças suspeitas de comportamento nas dependências, não apenas CVEs conhecidas.
- [ ] **SC-02-03 [P0]** Exigir revisão para a adição de dependências novas, sobretudo scripts de instalação, permissões e execução de rede/processo.
- [ ] **SC-02-04 [P0]** Não atrasar automaticamente correções de segurança urgentes em razão do período de maturação das versões.
- [ ] **SC-02-05 [P1]** Configurar `minimumReleaseAge` no Renovate, com valor de referência de **7 dias** ajustado ao risco do ecossistema.
- [ ] **SC-02-06 [P1]** Verificar suporte de timestamp da origem e comportamento para versões sem data, tags, digests e lockfile maintenance.
- [ ] **SC-02-07 [P1]** Configurar cooldown também no package manager quando suportado, para reduzir risco de novas dependências transitivas na regeneração do lockfile.
- [ ] **SC-02-08 [P1]** Conferir que patches de segurança gerenciados pelo Renovate contornam a espera e definir revisão manual de exceções.
- [ ] **SC-02-09 [P1]** Avaliar integração do **Socket.dev** ou ferramenta equivalente para análise de comportamento de pacotes em PRs.
- [ ] **SC-02-10 [P1]** Revisar alertas de scripts postinstall, ofuscação, alterações de mantenedores, uso de filesystem/rede/processos e pacotes semelhantes por typo.
- [ ] **SC-02-11 [P1]** Avaliar privacidade, permissões, custos, ecossistemas cobertos e armazenamento de manifests/lockfiles pela ferramenta escolhida.
- [ ] **SC-02-12 [P1]** Combinar análise comportamental com OSV, Trivy, Dependabot, CodeQL/SAST, SBOM e assinatura/proveniência sem confundir seus escopos.
- [ ] **SC-02-13 [P1]** Usar lockfiles em CI com instalação congelada/immutable e dependências resolvidas explicitamente.
- [ ] **SC-02-14 [P1]** Estabelecer política de atualização de ações GitHub e imagens por SHA/digest, com revisão de mudanças.
- [ ] **SC-02-15 [P2]** Avaliar mirrors internos, allowlist de registry/publisher e política de aprovação de novas dependências nos ambientes de maior risco.

### Reprodutibilidade e integridade do build

- [ ] **SC-03-01 [P0]** O mesmo commit e lockfile devem produzir uma build funcionalmente equivalente em um ambiente limpo.
- [ ] **SC-03-02 [P0]** Fixar runtime, compilador, package manager e versões de dependências, incluindo versões transitivas resolvidas.
- [ ] **SC-03-03 [P0]** Impedir dependências implícitas do host, credenciais de desenvolvimento e downloads não verificados durante o build.
- [ ] **SC-03-04 [P0]** Registrar commit, versão, ferramenta, configuração de compilação e hash do artefato implantado.
- [ ] **SC-03-05 [P1]** Distinguir *reprodutibilidade operacional* de *build bit a bit idêntico*; declarar qual garantia o projeto oferece.
- [ ] **SC-03-06 [P1]** Reexecutar o build em ambiente isolado e comparar hash de artefatos quando o projeto exige builds bit a bit reproduzíveis.
- [ ] **SC-03-07 [P1]** Fixar imagens base por digest, ações externas por SHA e evitar tags mutáveis em produção.
- [ ] **SC-03-08 [P1]** Tratar timestamps, ordem de arquivos, locale, timezone, caminhos absolutos, compressão e `SOURCE_DATE_EPOCH` quando afetarem bytes.
- [ ] **SC-03-09 [P1]** Separar variáveis de configuração de runtime dos artefatos de build para promover a mesma imagem por ambientes.
- [ ] **SC-03-10 [P1]** Gerar SBOM, provenance e atestações assinadas quando houver cadeia de distribuição de artefatos.
- [ ] **SC-03-11 [P1]** Executar testes de instalação e inicialização a partir do artefato publicado, e não apenas da árvore de código.
- [ ] **SC-03-12 [P1]** Definir mecanismo de revogação de release comprometida e recuperação da cadeia de artefatos.
- [ ] **SC-03-13 [P2]** Verificar builds independentes em mais de uma infraestrutura e comparar artefatos antes de distribuir software crítico.

### Aleatoriedade criptograficamente segura e geração de identificadores

- [ ] **SC-04-01 [P0]** Identificar todos os usos de aleatoriedade em sessões, reset de senha, tokens, chaves, nonces, CSRF, convites e segredos.
- [ ] **SC-04-02 [P0]** Usar gerador criptograficamente seguro (**CSPRNG**) oferecido pelo runtime/OS ou biblioteca mantida, nunca `Math.random` ou PRNG estatístico para segredos.
- [ ] **SC-04-03 [P0]** Selecionar tamanho e codificação de tokens de acordo com entropia exigida e ameaça; tokens imprevisíveis e com expiração adequada.
- [ ] **SC-04-04 [P0]** Usar bibliotecas criptográficas para geração de chaves e nonces com requisitos específicos do algoritmo; não inventar um gerador próprio.
- [ ] **SC-04-05 [P0]** Não reutilizar nonces quando o protocolo exigir unicidade, especialmente em modos de criptografia autenticada.
- [ ] **SC-04-06 [P0]** Proteger material aleatório secreto contra logs, telemetria, caching não seguro e armazenamento indevido.
- [ ] **SC-04-07 [P1]** Registrar o padrão de CSPRNG por linguagem e criar regra/revisão para usos inseguros de random em código sensível.
- [ ] **SC-04-08 [P1]** Diferenciar IDs com objetivo de unicidade dos IDs usados como barreira de autorização; um UUID não substitui checagem de permissão.
- [ ] **SC-04-09 [P1]** Verificar suporte e comportamento da fonte de entropia do ambiente, especialmente containers mínimos, IoT e boot inicial.
- [ ] **SC-04-10 [P1]** Evitar seeding manual de CSPRNG com timestamp, PID, username ou fonte previsível.
- [ ] **SC-04-11 [P1]** Testar geração de tokens e uso correto da API, não tentar medir segurança de CSPRNG por testes estatísticos superficiais.

### Liveness, readiness e startup probes

- [ ] **SC-05-01 [P0]** Quem desenvolve/opera o serviço entende: **liveness** identifica travamento que justifica restart, **readiness** controla recebimento de tráfego, **startup** protege inicialização longa.
- [ ] **SC-05-02 [P0]** Definir endpoints/commands de health check sem credenciais, sem dados privados e sem mutações.
- [ ] **SC-05-03 [P0]** Testar readiness durante inicialização e indisponibilidade transitória, garantindo que o Pod não receba tráfego antes de estar pronto.
- [ ] **SC-05-04 [P0]** Não usar indisponibilidade temporária de DB, API externa ou cache como motivo automático para matar um processo saudável via liveness.
- [ ] **SC-05-05 [P1]** Configurar startup probe quando o boot exige inicialização demorada, carregamento de recursos ou verificações custosas.
- [ ] **SC-05-06 [P1]** Configurar liveness que identifique travamento real com baixa sobrecarga e sem chamadas de rede externas desnecessárias.
- [ ] **SC-05-07 [P1]** Configurar readiness para pré-condições estritamente necessárias ao processamento de requisições, sem gerar efeito cascata.
- [ ] **SC-05-08 [P1]** Definir `failureThreshold`, `successThreshold`, `periodSeconds`, `timeoutSeconds` e atrasos conforme dados reais de inicialização.
- [ ] **SC-05-09 [P1]** Verificar diferenças entre probes HTTP, TCP, exec e gRPC e os requisitos do runtime.
- [ ] **SC-05-10 [P1]** Garantir que probes não façam queries custosas nem escrevam dados e não criem tempestade de requisições.
- [ ] **SC-05-11 [P1]** Testar cenário de boot lento, deadlock, carga alta e dependência externa fora do ar para evitar restart loop.
- [ ] **SC-05-12 [P1]** Correlacionar falhas de probe com logs, métricas, deploys, readiness dos services e ações do kubelet.
- [ ] **SC-05-13 [P1]** Distinguir probes do cluster de healthcheck de imagem Docker e de monitoração externa de experiência do usuário.

### Migrações seguras, DDL, transações e mudanças compatíveis

- [ ] **SC-06-01 [P0]** Considerar migração de schema como uma alteração de produção com riscos próprios de bloqueio, deadlock, reescrita e indisponibilidade.
- [ ] **SC-06-02 [P0]** Antes da migração, avaliar o SGBD e a versão, cardinalidade, índices, locks necessários, duração estimada e tráfego concorrente.
- [ ] **SC-06-03 [P0]** Verificar compatibilidade entre versões antigas e novas da aplicação durante rollout, inclusive rollback.
- [ ] **SC-06-04 [P0]** Evitar migrações potencialmente longas na inicialização de cada réplica e não bloquear a entrada de tráfego sem plano controlado.
- [ ] **SC-06-05 [P0]** Restringir tempo de aquisição de lock/transação e estabelecer monitoramento e plano de cancelamento para mudanças arriscadas.
- [ ] **SC-06-06 [P0]** Testar migrações em base representativa e observar locks, duração, I/O, replicação e indisponibilidade potencial.
- [ ] **SC-06-07 [P0]** Separar DDL de backfill volumoso; não manter grandes reprocessamentos na mesma transação de alteração de schema.
- [ ] **SC-06-08 [P1]** Preferir estratégia **expand → migrate/backfill → contract** para mudanças incompatíveis em serviços continuamente disponíveis.
- [ ] **SC-06-09 [P1]** Avaliar `ADD COLUMN` com default conforme versão e volatilidade da expressão; nem todo default provoca reescrita, mas locks continuam relevantes.
- [ ] **SC-06-10 [P1]** Planejar constraints, índices e mudanças de tipo de forma online/concurrent quando suportado pelo SGBD e pelo ORM.
- [ ] **SC-06-11 [P1]** Para backfill grande, atualizar em lotes de tamanho controlado, com checkpoint, pausa, limitação de taxa e retries idempotentes.
- [ ] **SC-06-12 [P1]** Monitorar lock wait, deadlocks, lag de replicação, saturação de I/O e progresso de cada lote.
- [ ] **SC-06-13 [P1]** Evitar transações longas que seguram locks, conexões e versões de linhas; usar unidades transacionais mínimas por requisito de consistência.
- [ ] **SC-06-14 [P1]** Documentar migração reversível ou estratégia de roll-forward quando o rollback de dados não for seguro.
- [ ] **SC-06-15 [P1]** Usar feature flags e leituras/escritas compatíveis na fase de transição, se necessário.
- [ ] **SC-06-16 [P1]** Testar comportamento em timeout, deadlock, migração parcialmente concluída e restart do serviço.
- [ ] **SC-06-17 [P1]** Nunca executar uma reescrita de tabela em produção só porque o SQL foi rápido em uma base pequena de desenvolvimento.

### Tarefas pesadas, workers, filas e processamento em lotes

- [ ] **SC-07-01 [P0]** Identificar tarefas de longa duração e trabalhos pesados em CPU, I/O, memória ou integração, evitando bloquear a requisição interativa.
- [ ] **SC-07-02 [P0]** Não bloquear event loop, workers HTTP ou transações críticas com processos massivos sem limites e avaliação de impacto.
- [ ] **SC-07-03 [P0]** Limitar tempo, concorrência, uso de memória e taxa para jobs com risco de exaustão de recursos.
- [ ] **SC-07-04 [P1]** Preferir fila/worker para e-mail, relatórios, processamento multimídia, importações, exportações, notificações e integrações demoradas.
- [ ] **SC-07-05 [P1]** Usar processamento em lotes com paginação estável por cursor/keyset e checkpoint para grandes datasets.
- [ ] **SC-07-06 [P1]** Definir semântica de entrega (ao menos uma vez/duplicação) e implementar idempotência para retries.
- [ ] **SC-07-07 [P1]** Configurar retries com backoff exponencial, jitter e limite de tentativas, distinguindo falhas transitórias de permanentes.
- [ ] **SC-07-08 [P1]** Implementar dead-letter queue ou tratamento equivalente para mensagens irrecuperáveis.
- [ ] **SC-07-09 [P1]** Separar filas e prioridades de trabalhos interativos e jobs custosos, com limites de concorrência por recurso.
- [ ] **SC-07-10 [P1]** Garantir confirmação/ack somente após persistência do resultado relevante e tratamento seguro de falhas.
- [ ] **SC-07-11 [P1]** Evitar publicar mensagem em fila sem garantia de persistência da transação correspondente; avaliar transactional outbox ou mecanismo equivalente.
- [ ] **SC-07-12 [P1]** Monitorar backlog, latência de fila, idade da mensagem, erros, retries, DLQ e saturação de workers.
- [ ] **SC-07-13 [P1]** Configurar shutdown graceful, parada de consumo, drenagem e retomada de jobs após deploy.
- [ ] **SC-07-14 [P1]** Validar deduplicação, ordenação e consistência dos resultados quando relevantes.
- [ ] **SC-07-15 [P1]** Ter alternativas síncronas simples quando o trabalho for rápido, limitado e precisar de resposta imediata; não criar fila por dogma.
- [ ] **SC-07-16 [P2]** Executar testes de carga com fluxo completo de fila + banco + workers, simulando retry storm e gargalos.

## Exemplos e decisões técnicas

### Minimum release age no Renovate

**Configuração adaptável (não copiar sem verificar a versão do Renovate):**

```json
{
  "$schema": "https://docs.renovatebot.com/renovate-schema.json",
  "extends": ["config:recommended"],
  "minimumReleaseAge": "7 days",
  "internalChecksFilter": "strict"
}
```

O valor de sete dias é ilustrativo e aparece em [guesant/hl-infrastructure](https://github.com/guesant/hl-infrastructure/blob/main/.github/renovate.json). Renovate pode reter uma atualização por versão com base no timestamp informado pelo registry. **Atualizações de segurança reconhecidas por Renovate contornam o minimum release age**, conforme sua documentação. Isso não dispensa revisão do patch e mitigação urgente de vulnerabilidades exploráveis.

**Limitações:** registries sem timestamp, tags móveis, digest pinning e manutenção de lockfile podem exigir exceções explícitas. Em gerenciadores de pacotes que suportam cooldown, configure-o também para que resoluções transitivas não contornem a política. Não bloquear indefinidamente correções de segurança por configurações de maturação.

### Socket.dev ou alternativa

[Socket for GitHub](https://docs.socket.dev/docs/socket-for-github) analisa manifests e lockfiles em PRs e sinaliza comportamentos de dependências potencialmente perigosos, como instalação com scripts, ofuscação ou uso de APIs privilegiadas. O objetivo é reduzir ataques **maliciosos de supply chain**, não substituir scanners de CVEs nem a revisão de código.

Avalie serviços equivalentes por análise comportamental, segurança de PR, permissões da integração, privacidade, ecossistemas suportados, capacidade de bloqueio e taxa de falsos positivos. Diferencie descoberta de malware, SCA/CVEs e análise de licenças.

### Reprodutibilidade: dois níveis distintos

1. **Ambiente e resultado funcional reproduzíveis:** runtime, toolchain e dependências fixados; builds em ambiente limpo têm o mesmo comportamento esperado.
2. **Reprodutibilidade bit a bit:** executar duas builds controladas com mesmo material de entrada produz **hashes idênticos**. Requer controle de timestamps, ordem de arquivos, caminhos, compressores e ferramentas.

Um lockfile sozinho não garante builds bit a bit idênticos. O ideal para deploy é **construir uma vez, promover o mesmo artefato** entre staging e produção, com hash, provenance e SBOM.

### Random criptográfico: escolha de APIs

| Ambiente | Para segredos, nonces e tokens |
| --- | --- |
| Node.js | `node:crypto.randomBytes()` ou `crypto.randomUUID()` quando o objetivo for UUID |
| Web Crypto em contexto compatível | `crypto.getRandomValues()` |
| Python | `secrets.token_bytes()`, `secrets.token_urlsafe()` |
| Go | `crypto/rand` |
| PHP | `random_bytes()`, `random_int()` |
| Rust | gerador seguro via biblioteca mantida e integração com entropy do SO |

Nunca usar `Math.random()`, `random.random()` ou seed baseado em timestamp/PID para tokens de autenticação ou material criptográfico. Não confundir unicidade de identificador com autorização. Referências: [NIST SP 800-90A Rev.1](https://csrc.nist.gov/pubs/sp/800/90/a/r1/final), [NIST SP 800-90B](https://csrc.nist.gov/pubs/sp/800/90/b/final) e [NIST SP 800-90C](https://csrc.nist.gov/pubs/sp/800/90/c/final).

### Kubernetes: probes com responsabilidades distintas

- **Liveness:** responde "o processo está irrecuperavelmente travado e precisa ser reiniciado?". Falhas repetidas podem reiniciar o container.
- **Readiness:** responde "este Pod pode atender requisições agora?". Falha retira o Pod dos endpoints do Service; não é motivo automático de restart.
- **Startup:** dá tempo ao processo para inicializar sem sofrer avaliação prematura de liveness/readiness. Falha persistente pode causar restart.

**Atenção:** uma liveness que falha toda vez que o banco oscila pode causar cascata de reinícios e agravar uma pane. Leia [Kubernetes: Configure Liveness, Readiness and Startup Probes](https://kubernetes.io/docs/tasks/configure-pod-container/configure-liveness-readiness-startup-probes/) e teste as falhas no ambiente usado.

Exemplo **ilustrativo** para um HTTP server com inicialização lenta, ajustável aos resultados de testes:

```yaml
startupProbe:
  httpGet:
    path: /startup
    port: 8080
  periodSeconds: 10
  failureThreshold: 30

readinessProbe:
  httpGet:
    path: /ready
    port: 8080
  periodSeconds: 5
  failureThreshold: 3

livenessProbe:
  httpGet:
    path: /live
    port: 8080
  periodSeconds: 10
  failureThreshold: 3
```

Os endpoints precisam ser implementados na aplicação. Um `/live` deve refletir saúde do próprio processo, e um `/ready` pode verificar dependências realmente essenciais sem realizar operações custosas. Ajustar `timeoutSeconds`, success threshold e outros parâmetros ao SLO.

### Migração de banco de dados sem paralisar a aplicação

Uma transação ou DDL pode bloquear outros processos por locks, consumir conexões, I/O ou causar lag de replicação. **Não é verdade que adicionar qualquer coluna com default sempre reescreve toda a tabela**: versões atuais do PostgreSQL normalmente adicionam colunas com DEFAULT não volátil sem reescrita completa; ainda assim, `ALTER TABLE` frequentemente exige locks de tabela e a duração/contenda devem ser avaliadas. Defaults voláteis, certas alterações de tipo e operações com constraints podem implicar reescrita. [Referência PostgreSQL ALTER TABLE](https://www.postgresql.org/docs/current/sql-altertable.html).

Estratégia genérica **expand → backfill → contract**:

1. **Expand:** adicionar schema compatível com ambas as versões da aplicação, preferindo operações rápidas ou online.
2. **Compatibilidade:** implantar código que lê/escreve as duas representações quando necessário.
3. **Backfill:** executar atualizações em lotes pequenos com checkpoints, métricas, limites de taxa e retries.
4. **Contract:** depois de verificar o resultado e retirar versões antigas, ativar constraints ou remover campos legados de modo controlado.

Para backfills grandes, preferir **transações curtas por lote**, respeitando consistência, unicidade, isolamento e consumo de recursos. É preciso saber quando operações atômicas exigem uma transação curta e única: **nem toda transação deve ser dividida**, e dividir uma transferência financeira sem um protocolo adequado pode corromper consistência.

### Workers e filas não são obrigatórios para qualquer tarefa

Uma operação rápida, pequena, atômica e necessária para produzir a resposta HTTP pode ser síncrona. Jobs demorados, repetitivos, pesados ou sujeitos a retries independentes devem, em geral, ser enviados a workers com limites, checkpoints, idempotência, controle de concorrência e monitoramento de backlog.

- Estabelecer tempo máximo de requisição e orçamento de latência.
- Quando a execução exceder o orçamento, usar job assíncrono com ID para consulta de status e retries seguros.
- **Backfill volumoso:** chunks por chave/cursor, commit por lote, recomeço e checkpoints.
- **Fila:** semântica de ack, retry, DLQ, idempotência, throughput, backpressure e ordenação quando aplicável.
- **Atomicidade entre DB e fila:** avaliar transactional outbox ou modelo equivalente.
- **Deploy:** garantir graceful shutdown e recuperação dos jobs in-flight.
- **Observabilidade:** medir duração, falhas, duplicações, retries, fila em espera e idade do job mais antigo.

## Fontes de referência

- [Renovate: Minimum release age](https://docs.renovatebot.com/key-concepts/minimum-release-age/)
- [Socket.dev: GitHub integration](https://docs.socket.dev/docs/socket-for-github)
- [Kubernetes: probes](https://kubernetes.io/docs/tasks/configure-pod-container/configure-liveness-readiness-startup-probes/)
- [PostgreSQL: ALTER TABLE](https://www.postgresql.org/docs/current/sql-altertable.html)
- [NIST SP 800-90A Rev. 1](https://csrc.nist.gov/pubs/sp/800/90/a/r1/final)
- [NIST SP 800-90C](https://csrc.nist.gov/pubs/sp/800/90/c/final)
