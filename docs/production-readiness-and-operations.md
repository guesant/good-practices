# Production readiness: antes do deploy e operação contínua

Checklist completo de **Go/No-Go**, segurança de produção, disponibilidade, arquitetura, observabilidade e operação. Adequado a aplicações web, APIs, serviços de backend, infraestrutura de containers e projetos hospedados em servidores. Aplicar controles conforme o perfil técnico e a criticidade.

## Como interpretar a obrigatoriedade

- **P0 — bloqueador de implantação quando aplicável:** não publicar um serviço real sem atendimento verificável ou exceção formal de risco, temporalmente delimitada, com medidas compensatórias. Este nível é uma **política interna recomendada** para o repositório, não uma obrigação jurídica universal.
- **P1 — fortemente recomendado:** implantar antes do go-live para serviços sensíveis ou públicos, ou registrar responsável, justificativa e prazo.
- **P2 — endurecimento avançado/opcional:** selecionar conforme exposição, impacto, maturidade e custo operacional.
- **N/A — não aplicável:** registrar justificativa. Exemplo: um site estático em hosting gerenciado não precisa instalar Fail2Ban no servidor do provedor.
- **Status real:** marcar apenas depois de testar e anexar evidência. Um Dockerfile, firewall ou dashboard existente não comprova que o controle funciona.

**Princípio de arquitetura:** o frontend pode coexistir com backend no mesmo repositório, BFF ou runtime quando a arquitetura justificar; o ponto obrigatório é preservar **fronteiras de confiança, autorização no servidor, sigilo de credenciais e isolamento de privilégios**. A preferência do perfil pessoal é manter deployables distintos para frontend e backend sempre que fizer sentido.

**Fail2Ban:** protege serviços expostos que geram eventos compatíveis de autenticação, como SSH. Não é requisito universal para apps nem substitui MFA, regras de firewall, eliminação de serviços expostos, rate limiting e proteção de endpoint. Deve ser instalado e testado somente onde existe controle do host e benefício concreto.

**Referenciais:** [CIS Controls v8.1](https://www.cisecurity.org/controls/cis-controls-list), [CIS Control 4](https://cas8.docs.cisecurity.org/en/latest/source/Controls4/), [CIS Control 8](https://cas8.docs.cisecurity.org/en/latest/source/Controls8/), [OWASP ASVS](https://owasp.org/www-project-application-security-verification-standard/), [OWASP Access Controls](https://devguide.owasp.org/en/04-design/02-web-app-checklist/07-access-controls/), [OWASP Logging/Monitoring](https://devguide.owasp.org/en/04-design/02-web-app-checklist/09-logging-monitoring/), [NIST CSF 2.0](https://www.nist.gov/cyberframework), [NIST SSDF](https://csrc.nist.gov/pubs/sp/800/218/final), [CISA KEV](https://www.cisa.gov/known-exploited-vulnerabilities-catalog), [FIRST EPSS](https://www.first.org/epss/), [Fail2Ban](https://github.com/fail2ban/fail2ban).

## Checklist adicional: supply chain, CSPRNG e processamento

As verificações adicionais para **Continuous Integration vs Continuous Delivery vs Continuous Deployment**, análise comportamental das dependências (Socket.dev), minimum release age, build reproduzível, CSPRNG, probes, migrações progressivas e filas/workers foram incluídas no [guia de entrega segura](secure-delivery-and-background-processing.md). O [README principal](../README.md) integra os 96 controles à lista de verificação única.

## Lista completa


### 01. Governança do deploy e classificação de risco

- [ ] **PR-01-01 [P0]** Identificar serviço, finalidade, ambiente, proprietário técnico e pessoa responsável pelo plantão/incidente.
- [ ] **PR-01-02 [P0]** Definir classificação de dados, superfícies públicas e internas, criticidade e impacto de indisponibilidade.
- [ ] **PR-01-03 [P0]** Definir o escopo efetivo da implantação: host, domínios, portas, redes, serviços, contas, storage, provedores e dependências.
- [ ] **PR-01-04 [P0]** Registrar modelo de ameaças com ao menos exposição à internet, credenciais, entrada de usuário e acessos administrativos.
- [ ] **PR-01-05 [P0]** Definir critérios objetivos de sucesso, falha e abortar/rollback, incluindo responsáveis pela decisão.
- [ ] **PR-01-06 [P0]** Garantir que nenhum controle P0 aplicável permaneça sem evidência ou sem exceção formalmente aceita antes do go-live.
- [ ] **PR-01-07 [P1]** Registrar requisitos não funcionais verificáveis de latência, capacidade, segurança, disponibilidade e recuperação.
- [ ] **PR-01-08 [P1]** Documentar comunicação a usuários e mudança, janela, responsáveis e plano de manutenção.
- [ ] **PR-01-09 [P1]** Configurar procedimento de avaliação de exceção com prazo, compensações, responsável e revisão.

### 02. Arquitetura e fronteiras frontend/backend

- [ ] **PR-02-01 [P0]** Separar responsabilidades de apresentação, autenticação/autorização, regras de negócio e persistência.
- [ ] **PR-02-02 [P0]** Nunca confiar em validação, roles, claims ou permissões recebidas somente do frontend; impor controles no backend.
- [ ] **PR-02-03 [P0]** Não disponibilizar conexão direta do navegador a bancos de dados ou credenciais de banco e serviços internos.
- [ ] **PR-02-04 [P0]** Não incluir chaves privadas ou segredos no bundle do navegador, JavaScript, HTML, sourcemaps ou assets públicos.
- [ ] **PR-02-05 [P0]** Definir fronteiras de confiança entre frontend, backend, workers, storage, serviços terceiros e operações administrativas.
- [ ] **PR-02-06 [P0]** Expor somente ingress/gateway e endpoints necessários, mantendo banco, brokers, cache e interfaces administrativas privados.
- [ ] **PR-02-07 [P1]** Adotar **perfil preferido de deployables frontend e backend separados**, com configuração, segredos e privilégios independentes.
- [ ] **PR-02-08 [P1]** Documentar quando um BFF/SSR ou deploy conjunto for uma exceção justificada e assegurar isolamento de responsabilidades.
- [ ] **PR-02-09 [P1]** Considerar repositórios distintos ou monorepo de múltiplos pacotes conforme manutenção; organização do Git não é fronteira de segurança.
- [ ] **PR-02-10 [P1]** Verificar políticas de CORS com allowlist estrita e endpoints públicos previstos; não usar `*` com credenciais.
- [ ] **PR-02-11 [P1]** Definir contratos de API, versionamento, tratamento de erro, timeout, retries e proteção de chamadas a terceiros.
- [ ] **PR-02-12 [P1]** Revisar acesso inter-serviços, segmentação e confiança de rede (Zero Trust) onde pertinente.

### 03. Host, serviços, portas e perímetro

- [ ] **PR-03-01 [P0]** Atualizar sistema operacional, kernel, runtimes críticos e firmware relevante antes da primeira exposição pública.
- [ ] **PR-03-02 [P0]** Inventariar portas TCP/UDP realmente em escuta em IPv4 **e IPv6**, além de interfaces de rede vinculadas.
- [ ] **PR-03-03 [P0]** Fechar portas de entrada desnecessárias com firewall; política padrão de negar entrada, permitindo explicitamente só tráfego requerido.
- [ ] **PR-03-04 [P0]** Verificar exposição **externamente**, a partir de rede autorizada diferente do próprio servidor (cloud security groups e host firewall podem divergir).
- [ ] **PR-03-05 [P0]** Parar, desabilitar e, quando seguro, desinstalar serviços, daemons, plugins e listeners não necessários.
- [ ] **PR-03-06 [P0]** Restringir SSH, consoles administrativos, dashboards e APIs de gerenciamento a VPN, allowlist ou acesso privado quando viável.
- [ ] **PR-03-07 [P0]** Impedir logins privilegiados ou por senha sem justificativa e aplicar chaves fortes e MFA quando o serviço permitir.
- [ ] **PR-03-08 [P0]** Remover credenciais padrão, contas de demonstração, instaladores, interfaces de debugging e serviços de desenvolvimento.
- [ ] **PR-03-09 [P0]** Restringir permissões de arquivos, diretórios, volumes e serviços; não executar a aplicação como root sem necessidade.
- [ ] **PR-03-10 [P0]** Validar configuração TLS, domínios, DNS e certificados com protocolo seguro e renovação/expiração monitorada.
- [ ] **PR-03-11 [P1]** Avaliar política de saída (egress) para restringir exfiltração e conexões inesperadas.
- [ ] **PR-03-12 [P1]** Aplicar perfil CIS Benchmarks ou baseline equivalente à distribuição e registrar exceções.
- [ ] **PR-03-13 [P1]** Usar serviços de acesso temporário, bastion/VPN e log de sessões administrativas para sistemas críticos.
- [ ] **PR-03-14 [P1]** Monitorar alterações no conjunto de portas, serviços e pacotes instalados após o lançamento.
- [ ] **PR-03-15 [P1]** Desabilitar login interativo para service accounts e remover shells, capabilities e cron jobs desnecessários.

### 04. Proteção contra brute force, abuso e DDoS

- [ ] **PR-04-01 [P0]** Proteger autenticação pública e APIs sensíveis contra tentativas automatizadas e abuso com controles no ponto de entrada.
- [ ] **PR-04-02 [P0]** Evitar depender de bloqueio de IP como único controle: chaves fortes/MFA, limitação por conta e detecção complementam.
- [ ] **PR-04-03 [P1]** Se houver SSH ou serviço compatível com logs de falhas exposto à internet, avaliar instalar e configurar **Fail2Ban** (ou alternativa adequada).
- [ ] **PR-04-04 [P1]** Configurar jails para serviços relevantes, `bantime`, `findtime`, `maxretry`, ações de firewall e fontes corretas de logs.
- [ ] **PR-04-05 [P1]** Testar regex e jail com registros reais, evitando banir usuários legítimos e sem perder acesso administrativo.
- [ ] **PR-04-06 [P1]** Verificar suporte e regras para IPv4 e IPv6 e compatibilidade com nftables, firewalld, UFW ou firewall utilizado.
- [ ] **PR-04-07 [P1]** Verificar se aplicações atrás de proxies/CDNs recebem o IP de origem de maneira confiável, sem confiar em cabeçalhos forjáveis.
- [ ] **PR-04-08 [P1]** Monitorar `fail2ban-client status`, bans inesperados e falhas do daemon; validar journal/log rotation.
- [ ] **PR-04-09 [P1]** Configurar rate limit em reverse proxy, gateway e aplicação por conta/IP/chave e por endpoint de risco.
- [ ] **PR-04-10 [P1]** Avaliar WAF, bot management, quotas e proteção DDoS do provedor para serviços com exposição relevante.
- [ ] **PR-04-11 [P1]** Estabelecer respostas não enumeráveis de login e recuperação de conta sem comprometer experiência e observabilidade.
- [ ] **PR-04-12 [P1]** Definir procedimento seguro para desbloqueio e falso positivo em proteções antiabuso.

### 05. Identidade, autenticação, sessão e autorização

- [ ] **PR-05-01 [P0]** Inventariar identidades humanas, contas de serviço, perfis administrativos e permissões por recurso.
- [ ] **PR-05-02 [P0]** Usar identidade única, MFA forte para administradores e política de provisionamento/revogação.
- [ ] **PR-05-03 [P0]** Executar **auditoria de autenticação**: login, falhas, cadastro, recuperação, MFA, refresh token, expiração e logout.
- [ ] **PR-05-04 [P0]** Executar **auditoria de autorização** para cada recurso e operação, inclusive APIs internas, funções administrativas e exportação de dados.
- [ ] **PR-05-05 [P0]** Testar IDOR/BOLA: usuários não acessam, editam ou removem recursos de outros usuários alterando IDs, URLs ou payloads.
- [ ] **PR-05-06 [P0]** Testar BFLA/elevação horizontal e vertical: um usuário não executa ações fora de suas permissões.
- [ ] **PR-05-07 [P0]** Negar acesso por padrão, validar autorização no servidor a cada operação e não apenas no menu ou frontend.
- [ ] **PR-05-08 [P0]** Testar isolamento de tenant/organização e políticas de campo/atributo, quando existentes.
- [ ] **PR-05-09 [P0]** Validar assinatura, audiência, emissor, expiração e uso correto de tokens e chaves de sessão.
- [ ] **PR-05-10 [P0]** Proteger cookies/sessões contra roubo, fixação e CSRF conforme arquitetura; limitar duração e revogar sessões quando exigido.
- [ ] **PR-05-11 [P0]** Registrar eventos de autenticação e negativas de autorização relevantes com identidade, operação e contexto seguros, **sem gravar senhas ou tokens**.
- [ ] **PR-05-12 [P1]** Criar matriz de papéis × recursos × ações e automatizar testes de permissão em CI.
- [ ] **PR-05-13 [P1]** Testar concorrência, race conditions e TOCTOU em autorizações críticas.
- [ ] **PR-05-14 [P1]** Realizar revisão independente de endpoints de administração, reset de senha, mudança de email e troca de MFA.
- [ ] **PR-05-15 [P1]** Considerar passkeys/WebAuthn e chaves FIDO2 para autenticação resistente a phishing.
- [ ] **PR-05-16 [P1]** Monitorar sessões atípicas, falhas repetidas, mudanças de privilégios e uso de contas dormentes.

### 06. Segredos, criptografia e dados

- [ ] **PR-06-01 [P0]** Não embutir segredos em repositório, imagem, variáveis públicas, bundle, logs ou artefatos.
- [ ] **PR-06-02 [P0]** Gerenciar credenciais de produção fora de ambientes de desenvolvimento e limitar seu escopo e validade.
- [ ] **PR-06-03 [P0]** Criptografar dados em trânsito e aplicar criptografia em repouso onde a classificação exigir.
- [ ] **PR-06-04 [P0]** Proteger backups e impedir exposição pública de snapshots, buckets, volumes, bancos e exports.
- [ ] **PR-06-05 [P0]** Garantir que DB, Redis, broker e consoles não estejam acessíveis diretamente pela internet salvo caso intencional excepcional.
- [ ] **PR-06-06 [P0]** Utilizar contas separadas de banco para leitura, escrita, migração e administração, quando os privilégios forem distintos.
- [ ] **PR-06-07 [P0]** Aplicar migrações com avaliação de reversibilidade e proteção de dados; testar em staging com dados representativos seguros.
- [ ] **PR-06-08 [P0]** Definir política mínima de retenção e exclusão de dados pessoais e sensíveis quando aplicável.
- [ ] **PR-06-09 [P1]** Preferir segredos efêmeros, OIDC ou vault/secret manager em vez de tokens permanentes.
- [ ] **PR-06-10 [P1]** Avaliar criptografia por campo e separação de chaves quando há dados de alta sensibilidade.
- [ ] **PR-06-11 [P1]** Testar rotação e revogação de chaves, certificados, tokens e contas de serviço.
- [ ] **PR-06-12 [P1]** Verificar que arquivos temporários, buckets de build e reports não contêm dados sensíveis.
- [ ] **PR-06-13 [P1]** Aplicar proteção de integridade em backups e evidências de auditoria.

### 07. Aplicação, API e proteção de superfície web

- [ ] **PR-07-01 [P0]** Remover flags de debug, endpoints de teste e mensagens de erro que exponham implementação interna.
- [ ] **PR-07-02 [P0]** Validar todas as entradas no servidor, inclusive tamanho e estrutura, e escapar saídas conforme contexto.
- [ ] **PR-07-03 [P0]** Verificar proteção contra injeção, SSRF, path traversal, upload não confiável, XSS e CSRF conforme exposição.
- [ ] **PR-07-04 [P0]** Aplicar TLS com redirecionamento adequado, validação de certificados e políticas seguras de sessão.
- [ ] **PR-07-05 [P0]** Testar CORS, cookies, origens permitidas, redirecionamentos e retornos de autenticação.
- [ ] **PR-07-06 [P0]** Não expor documentação interna, sourcemaps privados, `.env`, `.git`, backups ou arquivos de configuração no web root.
- [ ] **PR-07-07 [P1]** Configurar CSP, HSTS, Referrer-Policy, Permissions-Policy e outros headers adequados, sem quebrar funcionalidades legítimas.
- [ ] **PR-07-08 [P1]** Adotar limites de request body, timeouts e restrições de upload/download.
- [ ] **PR-07-09 [P1]** Revisar cache e headers em endpoints sensíveis, evitando armazenamento indevido por CDNs ou proxies.
- [ ] **PR-07-10 [P1]** Testar erros de autorização e input fora do fluxo feliz, inclusive com fuzzing ou testes baseados em propriedades.
- [ ] **PR-07-11 [P1]** Verificar licenças, third-party code e conteúdo público, incluindo páginas de crédito, segurança e privacidade.

### 08. Containers, runtime e isolamento

- [ ] **PR-08-01 [P0]** Não executar container privilegiado nem montar Docker socket em workloads públicos sem justificativa formal.
- [ ] **PR-08-02 [P0]** Executar processos sem privilégios de root quando possível e com capabilities mínimas.
- [ ] **PR-08-03 [P0]** Não publicar portas de DB, ferramentas internas ou serviços auxiliares inadvertidamente em Compose, Kubernetes ou cloud.
- [ ] **PR-08-04 [P0]** Revisar mounts, secrets, permissões de volumes e diretórios graváveis.
- [ ] **PR-08-05 [P0]** Verificar imagens e dependências por vulnerabilidades conhecidas e procedência.
- [ ] **PR-08-06 [P1]** Fixar imagens por digest ou versão imutável e manter plano de atualização.
- [ ] **PR-08-07 [P1]** Aplicar read-only root filesystem, seccomp, AppArmor/SELinux e no-new-privileges conforme aplicação.
- [ ] **PR-08-08 [P1]** Definir CPU, memória, número de processos e timeouts para limitar exaustão de recursos.
- [ ] **PR-08-09 [P1]** Configurar healthchecks, liveness/readiness/startup probes apropriadas sem loops destrutivos.
- [ ] **PR-08-10 [P1]** Usar políticas de rede entre namespaces e workloads, limitando tráfego por necessidade.
- [ ] **PR-08-11 [P1]** Testar falhas e restart de containers sem perda de dados nem loops de crash ocultos.
- [ ] **PR-08-12 [P1]** Verificar segregação de ambiente de build, runtime e workloads não confiáveis.

### 09. Dependências, CVE e cadeia de suprimentos

- [ ] **PR-09-01 [P0]** Inventariar software, versões e dependências de runtime, sistema, imagens e infraestrutura.
- [ ] **PR-09-02 [P0]** Verificar vulnerabilidades conhecidas aplicáveis antes do go-live; não liberar falha explorável crítica sem mitigação aceita.
- [ ] **PR-09-03 [P0]** Monitorar alertas para dependências diretas, transitivas, containers, OS e serviços gerenciados.
- [ ] **PR-09-04 [P0]** Definir triagem por impacto e exploração real, não apenas por pontuação CVSS.
- [ ] **PR-09-05 [P0]** Definir canal de segurança e responsável por atualizar/mitigar bibliotecas e imagens.
- [ ] **PR-09-06 [P1]** Correlacionar CVEs com CISA KEV, EPSS, exposição do componente, evidência de exploit e impacto do negócio.
- [ ] **PR-09-07 [P1]** Executar OSV-Scanner, Trivy, SCA e/ou outros scanners adequados sem duplicar alertas desnecessários.
- [ ] **PR-09-08 [P1]** Manter SBOM atualizado e registrar componentes críticos, fornecedores e licenças.
- [ ] **PR-09-09 [P1]** Configurar Renovate/Dependabot e testes automatizados nas atualizações.
- [ ] **PR-09-10 [P1]** Definir SLAs internos de correção por risco e urgência; revisar exceções com prazo.
- [ ] **PR-09-11 [P1]** Revisar changelogs, mudanças incompatíveis e integridade dos artefatos antes de atualizar.
- [ ] **PR-09-12 [P1]** Avaliar atestações de build, assinatura e proveniência em releases públicos ou críticos.

### 10. Logging, trilhas de auditoria e preservação

- [ ] **PR-10-01 [P0]** Confirmar logs de startup, erros, fatal, falhas de rede, processos e endpoints essenciais.
- [ ] **PR-10-02 [P0]** Registrar eventos relevantes de autenticação, negativas de autorização, mudanças de privilégios e ações administrativas.
- [ ] **PR-10-03 [P0]** Diferenciar logs técnicos, auditoria de segurança e rastros de negócio; não registrar conteúdo sensível sem necessidade.
- [ ] **PR-10-04 [P0]** Remover senhas, tokens, cookies de sessão, dados bancários e outros segredos de logs, traces, reports e payloads.
- [ ] **PR-10-05 [P0]** Incluir carimbo de tempo confiável, serviço, ambiente, severidade e correlação da requisição.
- [ ] **PR-10-06 [P0]** Definir retenção, rotação e capacidade de disco para impedir saturação e perda indevida de eventos.
- [ ] **PR-10-07 [P0]** Conferir se logs são produzidos **no ambiente de produção**, não só no ambiente de testes.
- [ ] **PR-10-08 [P1]** Centralizar logs (ex.: Loki, OpenSearch, Elastic ou serviço gerenciado) em ambiente com acesso controlado.
- [ ] **PR-10-09 [P1]** Proteger trilhas de auditoria contra exclusão e modificação indevidas, com retenção apropriada.
- [ ] **PR-10-10 [P1]** Adotar estrutura consistente de campos, correlation/trace ID e identificadores pseudonimizados quando possível.
- [ ] **PR-10-11 [P1]** Testar alertas de log: login anômalo, erro 5xx, elevação de privilégios, tokens expirados em massa, negação indevida.
- [ ] **PR-10-12 [P1]** Proteger observabilidade contra abuso, injeção em logs e acesso excessivo a dados dos usuários.
- [ ] **PR-10-13 [P1]** Verificar políticas de acesso de terceiros a logs e telemetria.
- [ ] **PR-10-14 [P1]** Documentar procedimento de investigação e preservação de evidências em incidentes.

### 11. Monitoramento, telemetria e alertas

- [ ] **PR-11-01 [P0]** Implantar ao menos uma verificação externa da disponibilidade do endpoint público e do DNS/TLS aplicável.
- [ ] **PR-11-02 [P0]** Monitorar erros de aplicação, disponibilidade e saturação de CPU, memória, disco e conexões relevantes.
- [ ] **PR-11-03 [P0]** Configurar um canal de alerta funcional com destinatário real e testar seu disparo antes do lançamento.
- [ ] **PR-11-04 [P0]** Definir responsável por receber alertas, inclusive fora do horário comercial se a criticidade exigir.
- [ ] **PR-11-05 [P1]** Instrumentar métricas RED (rate, errors, duration) e/ou USE (utilization, saturation, errors) onde apropriado.
- [ ] **PR-11-06 [P1]** Implementar tracing distribuído para diagnosticar chamadas entre frontend, backend e dependências.
- [ ] **PR-11-07 [P1]** Monitorar latência p95/p99, backlog de filas, banco, cache, pool de conexões e recursos de infraestrutura.
- [ ] **PR-11-08 [P1]** Definir SLI, SLO e objetivos de disponibilidade, latência, erro e recuperação verificáveis.
- [ ] **PR-11-09 [P1]** Criar dashboards com contexto por serviço e release (ex.: Grafana, Prometheus, Loki e Alertmanager).
- [ ] **PR-11-10 [P1]** Monitorar certificados expirando, falhas de backup, disco, renovação de domínio e crescimento de logs.
- [ ] **PR-11-11 [P1]** Evitar alert fatigue: definir severidade, deduplicação, runbooks e limiares acionáveis.
- [ ] **PR-11-12 [P1]** Configurar testes sintéticos dos fluxos críticos, incluindo login e funcionalidade principal, sem expor credenciais.
- [ ] **PR-11-13 [P1]** Medir impacto de cada deployment e permitir comparação antes/depois para regressões.

### 12. Disponibilidade, backup, rollback e recuperação

- [ ] **PR-12-01 [P0]** Realizar backup dos dados persistentes relevantes e documentar local, retenção e controles de acesso.
- [ ] **PR-12-02 [P0]** Comprovar restauração de backup em ambiente seguro para sistemas com dados não reproduzíveis.
- [ ] **PR-12-03 [P0]** Garantir plano de rollback de aplicação, infraestrutura e configuração sem corromper dados.
- [ ] **PR-12-04 [P0]** Revisar migrações de banco para mudanças destrutivas e procedimentos de recuperação.
- [ ] **PR-12-05 [P0]** Definir qual é o estado esperado em perda de conexão de DB, terceiros, cache, DNS e outros pontos críticos.
- [ ] **PR-12-06 [P1]** Definir RPO e RTO por serviço e validar que o desenho atende às metas.
- [ ] **PR-12-07 [P1]** Manter backup offsite/fora do cluster e isolado de contas com controle do ambiente primário.
- [ ] **PR-12-08 [P1]** Avaliar cópias imutáveis e proteção contra ransomware conforme criticidade.
- [ ] **PR-12-09 [P1]** Testar restart, failover, rotação de nós e recuperação de segredos/certificados.
- [ ] **PR-12-10 [P1]** Documentar runbooks de falha, dependências, contatos e procedimentos de emergência.
- [ ] **PR-12-11 [P1]** Avaliar canary, blue-green, feature flags e implantação gradual para reduzir blast radius.
- [ ] **PR-12-12 [P1]** Programar exercícios periódicos de restauração e de resposta a incidentes.

### 13. Qualidade, testes, performance e experiência

- [ ] **PR-13-01 [P0]** Executar CI com lint, typecheck, testes relevantes e build real do artefato de produção.
- [ ] **PR-13-02 [P0]** Testar funcionalidades críticas end-to-end ou por integração, incluindo fluxos negativos e autenticação.
- [ ] **PR-13-03 [P0]** Validar compatibilidade do banco, API e frontend nas versões efetivamente implantadas.
- [ ] **PR-13-04 [P0]** Confirmar que o ambiente de produção não depende de mocks, dados falsos ou feature flags inseguras não planejadas.
- [ ] **PR-13-05 [P1]** Executar testes de carga e concorrência com metas de latência, throughput e saturação para serviços críticos.
- [ ] **PR-13-06 [P1]** Testar comportamento com serviços externos lentos, indisponíveis ou retornando dados inconsistentes.
- [ ] **PR-13-07 [P1]** Verificar acessibilidade (WCAG), responsividade e navegação por teclado nas interfaces públicas.
- [ ] **PR-13-08 [P1]** Testar atualização, downgrade/rollback e compatibilidade com clientes antigos.
- [ ] **PR-13-09 [P1]** Avaliar consumo de recursos e limites de cache, fila, jobs assíncronos e upload.
- [ ] **PR-13-10 [P1]** Verificar idiomas, fuso horário, timezone no banco e unidade das métricas.

### 14. Proteção de dados, conformidade e transparência

- [ ] **PR-14-01 [P0]** Identificar bases legais, finalidade, compartilhamento e proteção de dados pessoais quando o produto os tratar.
- [ ] **PR-14-02 [P0]** Definir acesso e retenção mínimos e tratamento de solicitações de titulares quando aplicável.
- [ ] **PR-14-03 [P0]** Checar que páginas legais, licença, avisos e créditos obrigatórios estejam acessíveis.
- [ ] **PR-14-04 [P0]** Evitar publicação involuntária de dados pessoais, arquivos de teste, credenciais e datasets privados.
- [ ] **PR-14-05 [P1]** Revisar transferência de dados a fornecedores, telemetria terceirizada e subprocessadores.
- [ ] **PR-14-06 [P1]** Considerar avaliação de impacto de privacidade e risco em casos de dados sensíveis.
- [ ] **PR-14-07 [P1]** Documentar responsáveis pelo atendimento de incidentes envolvendo dados.
- [ ] **PR-14-08 [P1]** Testar exclusão, exportação e retenção, quando funcionalidades ou direitos aplicáveis exigirem.

### 15. Aprovação final: GO / NO-GO

- [ ] **PR-15-01 [P0]** Associar evidência por requisito P0 aplicável: comando, configuração, commit, relatório, teste ou screenshot seguro.
- [ ] **PR-15-02 [P0]** Registrar resultados de scan externo autorizado, configuração de firewall e serviços/portas ativos.
- [ ] **PR-15-03 [P0]** Registrar resultado da auditoria de autenticação e autorização (identidades e permissões críticas).
- [ ] **PR-15-04 [P0]** Registrar versão do release, commit, artefatos, dependências e última verificação de CVEs.
- [ ] **PR-15-05 [P0]** Confirmar canal de alerta testado, logs acessíveis e capacidade real de resposta.
- [ ] **PR-15-06 [P0]** Confirmar backups/restauração e rollback quando houver dados persistentes críticos.
- [ ] **PR-15-07 [P0]** Bloquear publicação quando houver segredo exposto, privilégio indevido, acesso público imprevisto, falha crítica explorável ou recuperação inviável sem aceitação explícita de risco.
- [ ] **PR-15-08 [P0]** Registrar decisão GO/NO-GO, responsável, data, exceções aceitas e plano de acompanhamento.
- [ ] **PR-15-09 [P1]** Fazer segunda revisão por outra pessoa para ambientes críticos ou com dados sensíveis.
- [ ] **PR-15-10 [P1]** Programar observação reforçada pós-deploy e reservar tempo para reação/rollback.

### 16. Pós-deploy imediato: smoke tests e observação

- [ ] **PR-16-01 [P0]** Confirmar deploy na versão/commit esperado e health endpoints respondendo.
- [ ] **PR-16-02 [P0]** Testar externamente HTTPS, DNS, rotas principais, login e autorização por uma conta de baixo privilégio.
- [ ] **PR-16-03 [P0]** Inspecionar logs da aplicação, proxy, autenticação e banco para erros inesperados após deploy.
- [ ] **PR-16-04 [P0]** Comparar 4xx/5xx, erros de aplicação, latência e saturação com valores antes do deploy.
- [ ] **PR-16-05 [P0]** Verificar se segredos, cookies, cache, serviços internos ou rotas administrativas não ficaram expostos.
- [ ] **PR-16-06 [P0]** Verificar alarmes reais e que o responsável consegue receber notificações.
- [ ] **PR-16-07 [P0]** Acionar rollback se critérios definidos de erro, perda de dados ou segurança forem atingidos.
- [ ] **PR-16-08 [P1]** Acompanhar sessões, tentativas de acesso, autorizações negadas e uso anormal após a implantação.
- [ ] **PR-16-09 [P1]** Manter janela de observação reforçada proporcional à criticidade e ao volume de tráfego.
- [ ] **PR-16-10 [P1]** Registrar regressões, incidentes, alterações manuais e evidências de estabilização.

### 17. Operação contínua: rotina diária, semanal, mensal e periódica

- [ ] **PR-17-01 [P0]** Inspecionar alertas críticos e disponibilidade conforme SLO e expectativa de atendimento, sem depender só de visitas manuais.
- [ ] **PR-17-02 [P0]** Corrigir ou mitigar vulnerabilidades exploradas ativamente com prioridade compatível com exposição e impacto.
- [ ] **PR-17-03 [P0]** Verificar regularmente a execução de backups e alarmes de falha.
- [ ] **PR-17-04 [P1]** Diariamente ou após incidentes: revisar alertas, 5xx, spikes, autenticações anômalas, negações de autorização e capacidade.
- [ ] **PR-17-05 [P1]** Semanalmente: revisar logs de segurança, eventos de firewall/Fail2Ban, tentativas de brute force e padrões suspeitos.
- [ ] **PR-17-06 [P1]** Semanalmente: revisar CVEs, dependências, boletins CISA KEV, vendors e Renovate/Dependabot.
- [ ] **PR-17-07 [P1]** Semanalmente: checar consumo de disco, certificados, tarefas, filas, dashboards e monitoramento externo.
- [ ] **PR-17-08 [P1]** Mensalmente: planejar e testar atualizações de sistema, runtimes, imagens, frameworks e dependências.
- [ ] **PR-17-09 [P1]** Mensalmente: rever permissões, contas inativas, tokens, serviços, portas, hosts e drift de configuração.
- [ ] **PR-17-10 [P1]** Mensalmente: verificar restauração de amostra de dados ou evidência recente de recuperação, conforme criticidade.
- [ ] **PR-17-11 [P1]** Trimestralmente ou em mudança relevante: revisar arquitetura, threat model, plano de continuidade e SLO.
- [ ] **PR-17-12 [P1]** Trimestralmente ou conforme risco: testar recuperação de incidente, backup, revogação de credenciais e procedimento de rollback.
- [ ] **PR-17-13 [P1]** Revisar falsos positivos e lacunas de detecção, retenção de logs e permissões da stack de observabilidade.
- [ ] **PR-17-14 [P1]** Manter histórico de ações corretivas, incidentes, resultados de patches e decisões de risco.
- [ ] **PR-17-15 [P1]** Definir plantão/escalonamento e sucessor para ausência do mantenedor quando a continuidade exigir.

### 18. Controles aprimorados conforme nível de risco

- [ ] **PR-18-01 [P2]** Implantar SIEM e correlação de eventos de segurança em ambientes que justifiquem equipe e operação dedicadas.
- [ ] **PR-18-02 [P2]** Usar detecção de intrusão host/network e controle de integridade de arquivos para sistemas sensíveis.
- [ ] **PR-18-03 [P2]** Aplicar canary deployment, feature flags, chaos experiments e testes recorrentes de resiliência quando houver maturidade.
- [ ] **PR-18-04 [P2]** Avaliar SSO, just-in-time privileged access, PAM e acesso administrativo temporário.
- [ ] **PR-18-05 [P2]** Usar SBOM contínuo, atestação de proveniência e assinatura de artefatos distribuídos.
- [ ] **PR-18-06 [P2]** Introduzir policy-as-code e verificação de drift em infraestrutura como código.
- [ ] **PR-18-07 [P2]** Fazer testes de intrusão autorizados por pessoas independentes e red teaming em superfícies críticas.
- [ ] **PR-18-08 [P2]** Testar proteção contra DDoS, quotas distribuídas e falhas de provedores em escala.
- [ ] **PR-18-09 [P2]** Automatizar rotinas read-only de verificação e gerar relatório de evidências com assinatura ou hash.
- [ ] **PR-18-10 [P2]** Estender monitoramento sintético e telemetria para jornadas de usuário, SLIs de negócio e análises de regressão.

## Verificações locais e evidências técnicas (exemplos)

Rode **somente em sistemas que você administra ou tem autorização para testar**. Estes comandos são de inspeção. Não altere firewall ou SSH remoto sem garantir um canal alternativo de recuperação, pois erros podem interromper seu acesso. Verifique disponibilidade de comandos na distribuição.

```sh
# Serviços TCP/UDP em escuta: não esqueça IPv6
ss -tulpen

# Daemons ativados em sistemas systemd
systemctl list-unit-files --type=service --state=enabled

# Firewall (usar o comando que pertence ao seu host)
sudo firewall-cmd --list-all
sudo ufw status verbose
sudo nft list ruleset

# Fail2Ban: somente se instalado e aplicável
sudo fail2ban-client status
sudo fail2ban-client status sshd

# Versão da aplicação e containers em execução, se forem usados
docker ps --format 'table {{.Names}}\t{{.Ports}}\t{{.Status}}'

# Últimos eventos de SSH (quando systemd/journal disponíveis)
sudo journalctl -u sshd --since '24 hours ago'
```

**Validação externa:** testar portas a partir de outra rede autorizada, incluindo IPv6, e comparar o resultado com a configuração de firewall no host, load balancer, security groups e ingress. Inspeção local com `ss` não substitui o teste externo.

**Fail2Ban:** validar configuração/jails, formato dos eventos e regex antes de ativar bloqueios. Evitar testes agressivos contra o próprio SSH remoto se não houver console de recuperação disponível. Quando SSH estiver acessível exclusivamente por rede privada, a necessidade de Fail2Ban pode ser baixa.

**Exemplos de evidência aceitável:** saída redigida de `ss`, `nft` ou UFW; relatório de scan autorizado; teste de autorização; evidência de rotação de secrets; restauração documentada; screenshot de alertas entregues; link para relatórios de CI; dashboard com eventos de produção; avaliação de CVEs com justificativas.

## Gate técnico sugerido

A decisão **GO** exige todos os P0 aplicáveis verificados e inexistência de vulnerabilidade crítica explorável ou exposição involuntária sem mitigação aceita. Exceções só devem ser concedidas por responsável com autoridade, mitigação explícita, prazo e monitoramento reforçado.

| Condição | Decisão padrão |
| --- | --- |
| P0 aplicável sem evidência | NO-GO |
| Porta administrativa ou banco exposto indevidamente | NO-GO |
| Autorização permite acesso entre usuários sem permissão | NO-GO |
| Segredo de produção exposto | NO-GO e revogação/rotação |
| CVE com exploração conhecida e exposição efetiva sem mitigação | NO-GO |
| Ausência de alertas para serviço crítico | NO-GO |
| Backup não restaurável para dados não reproduzíveis | NO-GO |
| P1 pendente com risco documentado e compensações | GO condicional, se aceito |
| P2 não implementado e sem obrigação específica | Não bloquear automaticamente |

## Cadência operacional sugerida

| Quando | Verificar |
| --- | --- |
| Antes de cada deploy | CI, autorização, portas alteradas, segredos, CVEs, migradores, backup, rollback e alertas |
| Logo após deploy | Smoke tests externos, erros, latência, logs, segurança, versão e telemetria |
| Continuamente | Alertas de disponibilidade, erros, vulnerabilidades exploradas e backups críticos |
| Diariamente em serviços críticos | Alertas, autenticação anômala, logs relevantes e saturação |
| Semanalmente | Revisão de logs, Fail2Ban/firewall, CVEs, patches, dashboards e capacidade |
| Mensalmente | Atualizações, permissões, configuração drift, portas e testes de recuperação proporcionais ao risco |
| Trimestralmente / mudança relevante | Threat model, ensaio de incidentes, RPO/RTO, arquitetura e maturidade dos controles |

A cadência é **um ponto de partida**, não um prazo universal. Em serviços críticos, alertas precisam funcionar continuamente; uma análise manual apenas semanal pode ser insuficiente.

## Modelo de registro de evidências

| Campo | Exemplo |
| --- | --- |
| ID | PR-05-05 |
| Controle | Testar IDOR/BOLA |
| Aplicabilidade | Aplicável |
| Prioridade | P0 |
| Status | Verificado / Falhou / Pendente / N/A |
| Evidência | Link para testes e logs sanitizados |
| Responsável | Pessoa ou equipe |
| Revisado em | Data |
| Risco residual | Descrição |
| Próxima revisão | Data |

**Limitação:** este checklist estabelece uma baseline de engenharia recomendada e não comprova, por si, conformidade com ISO, PCI DSS ou legislação. Para auditorias regulatórias, mapear requisitos à edição oficial aplicável e documentar controles adicionais.
