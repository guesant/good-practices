# Contratos, verificação de segurança, maturidade, resiliência e observabilidade

Este guia é parte do [checklist principal](../README.md). Cada controle possui **aplicabilidade, prioridade, verificação e evidência**, sem afirmar certificação ou substituir normas originais. `P0` bloqueia publicação apenas quando aplicável; `P1` é recomendação forte; `P2` é melhoria de maturidade. As fontes são referenciais temáticos, não atribuição de cada frase a uma cláusula.

## Contratos de API, compatibilidade e integrações

Referência: [https://spec.openapis.org/oas/latest.html](https://spec.openapis.org/oas/latest.html). Perfis: api, saas, backend.

- [ ] **API-01 [P0]** Versionar contratos OpenAPI, AsyncAPI ou esquema equivalente para interfaces públicas. **Verificação:** Comparar contratos publicados com endpoints e eventos reais. **Evidência:** Contrato versionado e teste de contrato aprovado.
- [ ] **API-02 [P0]** Detectar mudanças incompatíveis em schemas, headers, parâmetros, códigos e eventos. **Verificação:** Executar diff semântico na PR. **Evidência:** Relatório de breaking changes e decisão.
- [ ] **API-03 [P0]** Testar compatibilidade de frontend, backend, SDKs, workers e consumidores legados. **Verificação:** Rodar matriz de versões suportadas. **Evidência:** Matriz de testes de integração.
- [ ] **API-04 [P0]** Testar falhas e respostas de contratos de autenticação e autorização. **Verificação:** Executar contratos com perfis distintos. **Evidência:** Relatório de negativas e permissões.
- [ ] **API-05 [P1]** Criar testes orientados por contrato para consumidores e provedores. **Verificação:** Executar Pact ou verificações de schema equivalentes. **Evidência:** Pipeline e artefatos versionados.
- [ ] **API-06 [P1]** Documentar janelas de suporte, depreciação e política de breaking changes. **Verificação:** Validar changelog, versões e anúncios. **Evidência:** Política e histórico de releases.
- [ ] **API-07 [P1]** Definir semântica e padronização de códigos de erro sem vazar detalhes internos. **Verificação:** Testar casos normais, erro e timeout. **Evidência:** Coleção de contratos e testes.
- [ ] **API-08 [P1]** Testar idempotência de POSTs/commands que podem sofrer retry. **Verificação:** Repetir chamadas concorrentes com mesma chave. **Evidência:** Teste de idempotência.
- [ ] **API-09 [P1]** Definir timeout, circuit breaking, retry com jitter e orçamento fim a fim. **Verificação:** Injetar latência e falhas de dependência. **Evidência:** Teste de resiliência e tracing.
- [ ] **API-10 [P1]** Versionar eventos e tratar consumidores desconhecidos, campos opcionais e mensagens antigas. **Verificação:** Reproduzir mensagens de versões anteriores. **Evidência:** Fixtures e resultado.
- [ ] **API-11 [P1]** Publicar exemplos reproduzíveis e schemas de erros em API docs. **Verificação:** Validar exemplos automaticamente contra schema. **Evidência:** Build de documentação validado.
- [ ] **API-12 [P1]** Impedir introdução de campos sensíveis em payloads ou logs sem revisão de privacidade. **Verificação:** Inspecionar diff de schemas e sample payloads. **Evidência:** Revisão de dados registrada.

## Controles de segurança verificáveis inspirados no OWASP ASVS 5.0

Referência: [https://asvs.owasp.org/](https://asvs.owasp.org/). Perfis: web, api, saas.

- [ ] **ASVS-01 [P0]** Definir versão do ASVS, escopo e requisitos aplicáveis por criticidade. **Verificação:** Importar catálogo oficial CSV e selecionar IDs oficiais. **Evidência:** Matriz ASVS com edição e escopo.
- [ ] **ASVS-02 [P0]** Verificar autenticação, recuperação de conta, MFA e política de sessões. **Verificação:** Executar casos positivos e negativos contra produção de teste. **Evidência:** Testes de autenticação assinados.
- [ ] **ASVS-03 [P0]** Verificar autorização no backend por recurso, operação e tenant. **Verificação:** Exercitar IDOR/BOLA, privilégios e acesso cruzado. **Evidência:** Matriz de autorização e testes.
- [ ] **ASVS-04 [P0]** Validar entradas e saídas contra injeção, XSS, SSRF, path traversal e execução indevida. **Verificação:** Testes dinâmicos e negativos por ponto de entrada. **Evidência:** Relatório de validação de entrada.
- [ ] **ASVS-05 [P0]** Verificar segredos, criptografia, TLS, hashes de senha e gestão de tokens. **Verificação:** Revisar configuração e executar casos técnicos. **Evidência:** Checklist de criptografia auditado.
- [ ] **ASVS-06 [P0]** Verificar arquitetura de fronteiras de confiança, interfaces e permissões entre serviços. **Verificação:** Revisão de arquitetura por threat model. **Evidência:** Diagrama e decisões revisadas.
- [ ] **ASVS-07 [P1]** Verificar cabeçalhos HTTP, CSP, caches, cookies, CORS e isolamento de conteúdo. **Verificação:** Inspeção automatizada e teste funcional. **Evidência:** Resultados de testes de headers.
- [ ] **ASVS-08 [P1]** Verificar mensagens de erro, logs, monitoramento e ausência de dados sensíveis. **Verificação:** Injetar erros e inspecionar registros redigidos. **Evidência:** Log sanitizado e relatório.
- [ ] **ASVS-09 [P1]** Testar operações de upload, download e processamento de arquivos não confiáveis. **Verificação:** Usar corpus de testes de tipo/tamanho/paths. **Evidência:** Testes de upload com falhas esperadas.
- [ ] **ASVS-10 [P1]** Revisar configurações padrão, endpoints administrativos e hardening de deploy. **Verificação:** Executar scan de superfície e configuração. **Evidência:** Relatório de hardening.
- [ ] **ASVS-11 [P1]** Executar testes de segurança no CI que correspondam a controles ASVS selecionados. **Verificação:** Relacionar IDs do ASVS a testes executáveis. **Evidência:** Matriz requisito → teste → evidência.
- [ ] **ASVS-12 [P1]** Manter um registro do que não foi testado, dos falsos positivos e dos riscos residuais. **Verificação:** Revisar exceções antes de release. **Evidência:** Registro de risco e aprovações.
- [ ] **ASVS-13 [P1]** Revisar licenças e obrigações de atribuição do próprio ASVS ao reutilizar materiais. **Verificação:** Verificar licença e atribuição da fonte. **Evidência:** Lista de referências e avisos.
- [ ] **ASVS-14 [P2]** Planejar avaliação de segurança independente para aplicações de alto risco. **Verificação:** Realizar revisão independente de escopo. **Evidência:** Relatório com remediação.

## Maturidade de segurança com OWASP SAMM

Referência: [https://owaspsamm.org/model/](https://owaspsamm.org/model/). Perfis: all.

- [ ] **SAMM-01 [P1]** Avaliar Strategy & Metrics, Policy & Compliance e Education & Guidance. **Verificação:** Aplicar autoavaliação SAMM de governança. **Evidência:** Matriz de maturidade e plano.
- [ ] **SAMM-02 [P1]** Avaliar Threat Assessment, Security Requirements e Secure Architecture. **Verificação:** Revisar desenho e requisitos de segurança. **Evidência:** Relatório SAMM Design.
- [ ] **SAMM-03 [P1]** Avaliar Secure Build, Secure Deployment e Defect Management. **Verificação:** Inspecionar pipeline, releases e correção de defeitos. **Evidência:** Evidências de implementação.
- [ ] **SAMM-04 [P1]** Avaliar Architecture Assessment, Requirements-driven Testing e Security Testing. **Verificação:** Confrontar controles com testes e arquitetura. **Evidência:** Evidências de verificação.
- [ ] **SAMM-05 [P1]** Avaliar Incident Management, Environment Management e Operational Management. **Verificação:** Exercitar rotina de operação, incidentes e patches. **Evidência:** Relatório de operações.
- [ ] **SAMM-06 [P1]** Definir nível-alvo de maturidade por domínio, evitando a mesma meta para todos. **Verificação:** Justificar baseline em análise de risco. **Evidência:** Objetivos de maturidade.
- [ ] **SAMM-07 [P1]** Definir responsáveis, orçamento e revisão periódica dos planos de melhoria. **Verificação:** Revisar tarefas, prazos e resultados. **Evidência:** Backlog de melhoria.
- [ ] **SAMM-08 [P1]** Medir resultado e sustentabilidade do processo, não apenas presença de ferramentas. **Verificação:** Comparar evidência de execução recorrente. **Evidência:** Métricas e retrospectiva.
- [ ] **SAMM-09 [P2]** Realizar reavaliação independente de práticas mais críticas. **Verificação:** Comparar autoavaliação com avaliação externa. **Evidência:** Relatório independente.

## OpenSSF Best Practices Badge e governança open source

Referência: [https://openssf.org/projects/best-practices-badge/](https://openssf.org/projects/best-practices-badge/). Perfis: oss, library.

- [ ] **OSF-01 [P1]** Comparar projeto elegível aos critérios OpenSSF Baseline e Best Practices Badge. **Verificação:** Preencher autoavaliação com links de evidências. **Evidência:** Matriz de critérios.
- [ ] **OSF-02 [P1]** Distinguir OpenSSF Scorecard, OpenSSF Baseline e Best Practices Badge. **Verificação:** Conferir o objetivo, método e cobertura de cada avaliação. **Evidência:** Documentação de comparação.
- [ ] **OSF-03 [P1]** Avaliar progressão Passing → Silver → Gold somente para projetos adequados. **Verificação:** Verificar critérios por nível e capacidade de manutenção. **Evidência:** Plano de progresso.
- [ ] **OSF-04 [P1]** Documentar contribuição, governança, reporte de bugs, política de vulnerabilidades e suporte. **Verificação:** Verificar arquivos e canais públicos. **Evidência:** Links para documentos.
- [ ] **OSF-05 [P1]** Documentar manutenção, releases, práticas de teste e controle de mudanças. **Verificação:** Executar release de teste e revisar processos. **Evidência:** Histórico de release.
- [ ] **OSF-06 [P1]** Revisar bus factor, sucessão e diversidade de mantenedores para reduzir risco de abandono. **Verificação:** Simular ausência do mantenedor. **Evidência:** Plano de continuidade.
- [ ] **OSF-07 [P1]** Declarar status real das badges; não exibir badge como certificação independente automática. **Verificação:** Validar link e critérios reportados. **Evidência:** URL pública verificável.
- [ ] **OSF-08 [P2]** Submeter o projeto a programa de badge somente após evidências suficientes. **Verificação:** Preencher avaliação oficial quando elegível. **Evidência:** Link do formulário de avaliação.

## Resiliência, falhas e operações degradadas

Referência: [https://sre.google/workbook/](https://sre.google/workbook/). Perfis: api, saas, infra, backend.

- [ ] **RES-01 [P0]** Definir comportamento seguro quando banco, DNS, rede, cache e provedores externos falharem. **Verificação:** Desconectar dependência em staging autorizado. **Evidência:** Teste de falha e logs.
- [ ] **RES-02 [P0]** Garantir que retries não dupliquem pagamentos, mensagens ou mutações irreversíveis. **Verificação:** Repetir falhas no meio da transação. **Evidência:** Teste de idempotência.
- [ ] **RES-03 [P0]** Definir limite de concorrência, timeout, fila e política de sobrecarga. **Verificação:** Executar teste de saturação e backlog. **Evidência:** Métricas de sobrecarga.
- [ ] **RES-04 [P1]** Simular queda de banco, lentidão de queries, pool exaurido e deadlocks. **Verificação:** Usar fault injection isolada. **Evidência:** Relatório de falha de banco.
- [ ] **RES-05 [P1]** Simular interrupção de DNS ou resolução incorreta. **Verificação:** Aplicar DNS fault em ambiente de teste. **Evidência:** Teste com recuperação.
- [ ] **RES-06 [P1]** Simular perda de conectividade entre serviços e comportamento de timeout. **Verificação:** Aplicar fault network no ambiente autorizado. **Evidência:** Trace e relatório.
- [ ] **RES-07 [P1]** Simular parada de filas, workers e brokers, verificando backlog e retomada. **Verificação:** Suspender consumers e publicar mensagens de teste. **Evidência:** Dashboard de filas.
- [ ] **RES-08 [P1]** Simular disco cheio, arquivos temporários lotados e falha de logging. **Verificação:** Limitar volume em staging controlado. **Evidência:** Resultados e alertas.
- [ ] **RES-09 [P1]** Simular falta de memória, CPU e reinícios abruptos de processo. **Verificação:** Aplicar limites e encerrar processos. **Evidência:** Tempo de recuperação.
- [ ] **RES-10 [P1]** Testar implantação com instância indisponível, rollout interrompido e rollback. **Verificação:** Parar instância durante rollout. **Evidência:** Relatório de rollout.
- [ ] **RES-11 [P1]** Validar graceful shutdown, drenagem de conexões e tarefas em voo. **Verificação:** Enviar SIGTERM no processamento. **Evidência:** Teste sem perda de trabalho.
- [ ] **RES-12 [P1]** Verificar circuit breaker, bulkhead e limites de retries para evitar cascata. **Verificação:** Falhar uma dependência comum. **Evidência:** Métrica de impacto no restante.
- [ ] **RES-13 [P1]** Testar cache desatualizado, indisponível ou inconsistente. **Verificação:** Desligar cache e verificar fallback. **Evidência:** Resultado de consistência.
- [ ] **RES-14 [P1]** Testar repetição de processamento com at-least-once delivery. **Verificação:** Reentregar mensagens deliberadamente. **Evidência:** Teste de deduplicação.
- [ ] **RES-15 [P1]** Verificar recuperação após interrupção no meio de backup ou migração. **Verificação:** Interromper operação no laboratório. **Evidência:** Plano de recuperação validado.
- [ ] **RES-16 [P1]** Definir RPO/RTO e medir recuperação observada, não apenas planejada. **Verificação:** Executar exercício cronometrado. **Evidência:** Relatório de RTO/RPO.
- [ ] **RES-17 [P1]** Registrar hipóteses, blast radius e plano de abortar cada experimento. **Verificação:** Revisar game day antes da execução. **Evidência:** Plano de experimento.
- [ ] **RES-18 [P2]** Executar game days controlados e chaos engineering progressivo. **Verificação:** Executar cenário aprovado. **Evidência:** Relatório e melhorias.
- [ ] **RES-19 [P2]** Repetir experimentos após mudança importante de infraestrutura. **Verificação:** Comparar resultados. **Evidência:** Registro de regressão.

## Observabilidade da observabilidade e alertas

Referência: [https://sre.google/workbook/alerting-on-slos/](https://sre.google/workbook/alerting-on-slos/). Perfis: api, saas, infra, backend.

- [ ] **OBS-01 [P0]** Verificar disponibilidade do próprio pipeline de monitoramento e entrega de alertas. **Verificação:** Interromper exporter/receptor em teste. **Evidência:** Alerta externo recebido.
- [ ] **OBS-02 [P0]** Definir quem recebe alertas, quem substitui o responsável e como escalar. **Verificação:** Executar exercício de notificação. **Evidência:** Registro de recebimento.
- [ ] **OBS-03 [P0]** Testar se falha de logs, métricas ou alertmanager é detectada por canal independente. **Verificação:** Derrubar componente de observabilidade em teste. **Evidência:** Alerta out-of-band.
- [ ] **OBS-04 [P1]** Definir SLIs por jornada crítica e SLOs verificáveis por janela. **Verificação:** Confrontar métricas com usuários sintéticos. **Evidência:** Dashboard SLO.
- [ ] **OBS-05 [P1]** Configurar alertas multiwindow/multi-burn-rate de consumo do error budget quando há volume suficiente. **Verificação:** Simular erro sustentado e spikes. **Evidência:** Regra e firing test.
- [ ] **OBS-06 [P1]** Calibrar alertas para baixo tráfego, evitando alarmes erráticos por amostras raras. **Verificação:** Simular janelas com poucas requisições. **Evidência:** Teste de baixa amostragem.
- [ ] **OBS-07 [P1]** Evitar tempestade de alertas com agrupamento, deduplicação, silenciamento e inibição. **Verificação:** Provocar falhas correlacionadas em teste. **Evidência:** Histórico de alertas.
- [ ] **OBS-08 [P1]** Associar runbook, impacto e painel a cada alerta acionável. **Verificação:** Abrir links a partir do alerta. **Evidência:** Runbook vinculado.
- [ ] **OBS-09 [P1]** Testar ausência de métricas (no data) separadamente de métricas normais. **Verificação:** Remover série/expor falha de scrape. **Evidência:** Resultado de ausência de dados.
- [ ] **OBS-10 [P1]** Monitorar atraso de ingestão, cardinalidade excessiva e perda de traces/logs. **Verificação:** Injetar atraso e verificar lacunas. **Evidência:** Dashboards de pipeline.
- [ ] **OBS-11 [P1]** Revisar quem acessa logs e dados pessoais na observabilidade. **Verificação:** Auditar roles e retenção. **Evidência:** Matriz de acesso.
- [ ] **OBS-12 [P1]** Registrar incidentes sem alerta, alarmes falsos e tempo até detecção. **Verificação:** Analisar postmortems. **Evidência:** Relatório de qualidade dos alertas.
- [ ] **OBS-13 [P1]** Verificar heartbeat ou dead man's switch para monitoramento crítico. **Verificação:** Interromper sinal periódico. **Evidência:** Notificação de heartbeat ausente.
- [ ] **OBS-14 [P2]** Aplicar testes sintéticos e RUM combinados para validar perspectiva do usuário. **Verificação:** Comparar sintéticos e sinais reais. **Evidência:** Análise de divergência.

## Notas para implementação

**ASVS:** use a versão estável 5.0.0 publicada pela OWASP e importe o CSV oficial na avaliação específica. Não atribua os IDs deste guia aos IDs oficiais do ASVS. Considere os testes do [OWASP Web Security Testing Guide](https://owasp.org/www-project-web-security-testing-guide/) e o escopo autorizado.

**SAMM:** as cinco funções são Governance, Design, Implementation, Verification e Operations. Avalie práticas e capacidade operacional, não apenas um scanner instalado.

**OpenSSF:** Best Practices Badge é uma autoavaliação voluntária, distinta do Scorecard. Badge Passing, Silver e Gold e OpenSSF Baseline têm critérios diferentes. Não publicar badge que não foi efetivamente obtida.

**Resiliência:** nunca faça fault injection em sistemas de terceiros ou em produção sem autorização, plano de contenção e capacidade de recuperação. Primeiro execute em ambiente isolado.

**Observabilidade:** monitoração in-band não cobre falha total do próprio sistema de observabilidade. Estabeleça caminho independente para alertas críticos.
