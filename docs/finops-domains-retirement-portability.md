# FinOps, segurança econômica, DNS/e-mail, descomissionamento e portabilidade

Controles aplicáveis conforme exposição, provedor e ciclo de vida. Os checks P0 são pré-requisitos apenas quando o cenário os exige; uma biblioteca sem domínio ou pagamentos não deve ser marcada como falha por não ter SPF ou alertas de custo.

## Custos, quotas e FinOps / segurança econômica

Fonte temática: [https://www.finops.org/framework/](https://www.finops.org/framework/). Perfis: api, saas, infra, ai, backend.

- [ ] **FIN-01 [P0]** Identificar todos os provedores que podem gerar despesa por requisição, consumo ou transferência. **Verificação:** Mapear fatura, plano e endpoints cobrados. **Evidência:** Inventário de provedores e preços.
- [ ] **FIN-02 [P0]** Definir orçamentos de produção e alertas de consumo para serviços com cobrança variável. **Verificação:** Simular alerta de custo seguro. **Evidência:** Alerta recebido.
- [ ] **FIN-03 [P0]** Limitar operações que permitem consumo descontrolado de APIs pagas. **Verificação:** Testar cotas por usuário/tenant/chave. **Evidência:** Teste de abuso e quotas.
- [ ] **FIN-04 [P0]** Proteger chaves e credenciais de billing e APIs de alto custo contra acesso de clientes. **Verificação:** Inspecionar frontend, permissões e segredos. **Evidência:** Relatório de segurança de credenciais.
- [ ] **FIN-05 [P1]** Definir owner, centro de custo, tags de ambiente e política de contabilização. **Verificação:** Conferir tags e orçamento por serviço. **Evidência:** Dashboard com responsabilidades.
- [ ] **FIN-06 [P1]** Configurar quotas, budget alerts, throttling e hard limits quando o provedor suportar. **Verificação:** Simular pico controlado de uso. **Evidência:** Registro de limite disparado.
- [ ] **FIN-07 [P1]** Criar alertas de anomalia de custo para variações de uso e cobranças. **Verificação:** Verificar cobertura em provedor e teste controlado. **Evidência:** Regra e histórico de alerta.
- [ ] **FIN-08 [P1]** Medir custo por requisição, tenant, job, build, modelo de IA ou funcionalidade. **Verificação:** Analisar tracing e fatura por dimensões. **Evidência:** Relatório de unit economics.
- [ ] **FIN-09 [P1]** Limitar concorrência, payload, número de itens e profundidade de consultas pagas. **Verificação:** Executar carga por tenant dentro de limites. **Evidência:** Relatório de stress econômico.
- [ ] **FIN-10 [P1]** Evitar loops e retries infinitos em tarefas faturáveis, incluindo alertas sobre repetição. **Verificação:** Injetar falhas de fornecedor e contar chamadas. **Evidência:** Teste de retry com custos.
- [ ] **FIN-11 [P1]** Planejar reservas, instâncias, storage, retenção de logs e egress para evitar desperdício. **Verificação:** Revisar custos antes/depois da otimização. **Evidência:** Relatório FinOps.
- [ ] **FIN-12 [P1]** Definir orçamento e alertas de recursos criados em ambientes temporários/preview. **Verificação:** Criar e destruir ambiente em ensaio. **Evidência:** Inventário de recursos órfãos.
- [ ] **FIN-13 [P1]** Monitorar custos de observabilidade: cardinalidade, retenção, sampling e volume de logs. **Verificação:** Comparar custo/volume de ingestão. **Evidência:** Métricas e relatório de retenção.
- [ ] **FIN-14 [P1]** Documentar comportamento diante de esgotamento de créditos, quotas ou budget. **Verificação:** Simular limite de provedor/staging. **Evidência:** Teste de degradação econômica.
- [ ] **FIN-15 [P2]** Comparar provedores e cenários de custos para crescimento 10x ou 100x. **Verificação:** Modelar TCO e curva de utilização. **Evidência:** Planilha de cenários.

## Domínios, DNS, HTTPS e e-mail confiável

Fonte temática: [https://www.rfc-editor.org/rfc/rfc7489](https://www.rfc-editor.org/rfc/rfc7489). Perfis: web, api, saas, infra.

- [ ] **DNS-01 [P0]** Proteger conta de registrador DNS e provedores de zona com MFA resistente a phishing quando suportado. **Verificação:** Revisar contas, tokens e papéis. **Evidência:** Revisão de identidade do registrador.
- [ ] **DNS-02 [P0]** Definir owner, renovação e alertas para todos os domínios produtivos. **Verificação:** Consultar expiração e testar notificações. **Evidência:** Inventário e alerta.
- [ ] **DNS-03 [P0]** Verificar que registros públicos A/AAAA/CNAME/MX/TXT não expõem serviços internos por engano. **Verificação:** Fazer inventário e consulta DNS autorizada. **Evidência:** Snapshot redigido da zona.
- [ ] **DNS-04 [P0]** Proteger HTTPS com certificado válido e renovação automatizada ou plano comprovado. **Verificação:** Forçar renovação em ambiente de teste. **Evidência:** Relatório TLS/ACME.
- [ ] **DNS-05 [P1]** Avaliar DNSSEC segundo suporte do registrador e do DNS autoritativo, incluindo rotação de chaves. **Verificação:** Testar cadeia de confiança e plano de rollover. **Evidência:** Relatório de validação DNSSEC.
- [ ] **DNS-06 [P1]** Configurar CAA para limitar autoridades certificadoras autorizadas quando viável. **Verificação:** Consultar CAA e testar emissão legítima. **Evidência:** Configuração CAA.
- [ ] **DNS-07 [P1]** Configurar SPF válido para domínios que enviam e-mail, sem registros excessivos ou permissivos. **Verificação:** Avaliar SPF real dos remetentes. **Evidência:** Resultado de autenticação.
- [ ] **DNS-08 [P1]** Assinar e-mails com DKIM e verificar gerenciamento de seletores e rotação. **Verificação:** Enviar teste e examinar headers. **Evidência:** Cabeçalhos de e-mail de teste.
- [ ] **DNS-09 [P1]** Configurar DMARC e evoluir monitorado de p=none para política de quarentena/rejeição após validar alinhamento. **Verificação:** Analisar relatórios agregados e spoofing. **Evidência:** Política DMARC e análise.
- [ ] **DNS-10 [P1]** Proteger domínio que não envia e-mail com política coerente (SPF e DMARC apropriados). **Verificação:** Verificar tratamento de e-mails forjados. **Evidência:** Registros DNS e teste.
- [ ] **DNS-11 [P1]** Separar subdomínios transacionais, marketing e autenticadores conforme risco e reputação. **Verificação:** Verificar rotas e reputação. **Evidência:** Mapa de fluxo de e-mail.
- [ ] **DNS-12 [P1]** Monitorar emissões CT inesperadas, certificados novos e alterações sensíveis de DNS. **Verificação:** Inspecionar alertas de Certificate Transparency. **Evidência:** Alertas verificados.
- [ ] **DNS-13 [P1]** Avaliar proteção contra domain/subdomain takeover em DNS apontando para serviços extintos. **Verificação:** Encontrar aliases órfãos autorizados. **Evidência:** Inventário de CNAMEs.
- [ ] **DNS-14 [P1]** Usar permissões mínimas para tokens DNS e limitar alcance de automações ACME. **Verificação:** Auditar permissões API de zona. **Evidência:** Matriz de tokens.
- [ ] **DNS-15 [P1]** Testar failover DNS e efeitos de TTL/caching quando há múltiplos endpoints. **Verificação:** Executar ensaio controlado de mudança. **Evidência:** Relatório DNS.
- [ ] **DNS-16 [P1]** Monitorar MX, DKIM, SPF, DMARC e falhas de entrega de e-mail transacional. **Verificação:** Inspecionar bounce e autenticação. **Evidência:** Dashboard de e-mail.
- [ ] **DNS-17 [P2]** Considerar separação de registrador e DNS, lock de domínio e redundância autoritativa em serviços críticos. **Verificação:** Revisar arquitetura de DNS e contingência. **Evidência:** Plano de continuidade.

## Descomissionamento, retirada de sistemas e limpeza de acessos

Fonte temática: [https://csrc.nist.gov/pubs/sp/800/88/r1/final](https://csrc.nist.gov/pubs/sp/800/88/r1/final). Perfis: all.

- [ ] **RET-01 [P0]** Criar processo formal para decidir quando um serviço ou projeto será desativado. **Verificação:** Verificar inventário e aprovação da retirada. **Evidência:** Registro de decisão.
- [ ] **RET-02 [P0]** Inventariar usuários, integrações, APIs, filas, jobs, DNS, webhooks e dependentes antes da retirada. **Verificação:** Pesquisar consumidores reais e proprietários. **Evidência:** Mapa de dependências.
- [ ] **RET-03 [P0]** Revisar obrigações legais de retenção, exclusão e exportação antes de apagar dados. **Verificação:** Validar política e acordos aplicáveis. **Evidência:** Matriz de retenção.
- [ ] **RET-04 [P0]** Revogar tokens, chaves, webhooks, service accounts, deploy keys e credenciais do serviço desativado. **Verificação:** Conferir IAM e secrets manager. **Evidência:** Evidência de revogação.
- [ ] **RET-05 [P0]** Remover exposição externa: DNS, load balancers, ingress, portas, certificados e regras de firewall não usados. **Verificação:** Reescanear perímetro após remoção. **Evidência:** Relatório de superfície reduzida.
- [ ] **RET-06 [P0]** Assegurar entrega, exportação ou descarte seguro de dados, conforme contrato e legislação. **Verificação:** Simular solicitação de recuperação e descarte. **Evidência:** Termo e comprovante de descarte.
- [ ] **RET-07 [P1]** Comunicar depreciação, prazo, alternativas e suporte aos consumidores. **Verificação:** Revisar avisos e cronograma. **Evidência:** Aviso de descontinuação.
- [ ] **RET-08 [P1]** Definir janela de read-only e redirecionamento quando houver clientes ativos. **Verificação:** Executar testes de experiência na retirada. **Evidência:** Plano de migração.
- [ ] **RET-09 [P1]** Desligar cron jobs, pipelines, bots e integrações para evitar gasto ou trabalho órfão. **Verificação:** Revisar agendamentos e últimas execuções. **Evidência:** Lista de jobs encerrados.
- [ ] **RET-10 [P1]** Remover recursos cloud, volumes, registries, snapshots e ambientes efêmeros não retidos. **Verificação:** Comparar inventário antes/depois. **Evidência:** Relatório de recursos destruídos.
- [ ] **RET-11 [P1]** Revisar backups e sua política de expiração, inclusive cópias fora do ambiente. **Verificação:** Auditar backups e políticas de descarte. **Evidência:** Registro de retenção.
- [ ] **RET-12 [P1]** Arquivar documentação e código necessários ao suporte histórico ou auditoria. **Verificação:** Testar acesso de mantenedor ao arquivo. **Evidência:** Link para arquivo.
- [ ] **RET-13 [P1]** Remover permissões e papéis administrativos exclusivos do sistema extinto. **Verificação:** Comparar IAM. **Evidência:** Relatório de privilégios.
- [ ] **RET-14 [P1]** Atualizar status no README, releases, changelog, docs e repositório (archived/deprecated). **Verificação:** Revisar documentação pública. **Evidência:** Links com status atualizado.
- [ ] **RET-15 [P1]** Verificar inexistência de DNS órfão ou subdomain takeover após desligamento. **Verificação:** Executar checagem de aliases públicos. **Evidência:** Resultado de varredura.
- [ ] **RET-16 [P1]** Revisar fatura, telemetria e logs após desligamento para detectar uso residual. **Verificação:** Verificar custo e acessos em janela de observação. **Evidência:** Relatório pós-descomissionamento.

## Portabilidade, custos arquiteturais e vendor lock-in

Fonte temática: [https://www.cncf.io/projects/](https://www.cncf.io/projects/). Perfis: api, saas, infra, backend, data.

- [ ] **PORT-01 [P1]** Registrar dependências em nuvem, SaaS, protocolos e formatos proprietários de alto impacto. **Verificação:** Manter inventário de fornecedores e funcionalidades. **Evidência:** Mapa de dependências e contrato.
- [ ] **PORT-02 [P1]** Definir formato de exportação e política de portabilidade dos dados. **Verificação:** Executar export e reimport em ambiente isolado. **Evidência:** Teste de portabilidade.
- [ ] **PORT-03 [P1]** Definir estratégia para substituir provedores críticos de autenticação, filas, object storage e observabilidade. **Verificação:** Simular adaptação de uma integração. **Evidência:** ADR e esforço estimado.
- [ ] **PORT-04 [P1]** Documentar custos de saída (egress), licenciamento, retirada de dados e término de contrato. **Verificação:** Avaliar termos e cenários de troca. **Evidência:** Estimativa de saída.
- [ ] **PORT-05 [P1]** Preferir interfaces estáveis e padrões abertos quando cumprirem requisitos reais. **Verificação:** Comparar soluções por critérios técnicos. **Evidência:** ADR de escolha de protocolo.
- [ ] **PORT-06 [P1]** Separar código de integração de regras de domínio quando essa separação reduzir custo de mudança. **Verificação:** Revisar dependências de componentes. **Evidência:** Diagrama e teste de adaptação.
- [ ] **PORT-07 [P1]** Identificar single points of failure e dependências externas que inviabilizam todo o serviço. **Verificação:** Simular falhas das dependências. **Evidência:** Mapa de impacto.
- [ ] **PORT-08 [P1]** Medir disponibilidade contratual/observada de provedores e plano de contingência. **Verificação:** Confrontar SLAs e incidentes. **Evidência:** Relatório mensal de fornecedor.
- [ ] **PORT-09 [P1]** Definir tratamento de indisponibilidade e rate limit de APIs de terceiros. **Verificação:** Injetar 429/timeout em staging. **Evidência:** Testes de fallback.
- [ ] **PORT-10 [P1]** Avaliar risco de abandono de bibliotecas, extensão e produtos essenciais. **Verificação:** Revisar atividade, CVEs, mantenedores e releases. **Evidência:** Registro de risco tecnológico.
- [ ] **PORT-11 [P1]** Registrar pontos de reversibilidade de decisões arquiteturais e custo de migração. **Verificação:** Revisar ADR após release. **Evidência:** Registro de trade-offs.
- [ ] **PORT-12 [P2]** Executar prova de conceito de portabilidade entre provedores para sistemas críticos. **Verificação:** Reimplantar serviço com dados de teste. **Evidência:** Relatório PoC.
- [ ] **PORT-13 [P2]** Definir estratégia de continuidade se SaaS for encerrado ou elevar preços drasticamente. **Verificação:** Simular interrupção contratual. **Evidência:** Plano de saída.

## Notas de adoção

**FinOps e abuso econômico:** um sistema pode estar disponível e protegido contra invasão e, mesmo assim, sofrer prejuízo por requisições excessivas. O [OWASP API4:2023](https://api-security.owasp.org/editions/2023/en/0xa4-unrestricted-resource-consumption/) reconhece consumo irrestrito de recursos. Alertas de custo são detectivos e **não representam hard limits** se o provedor continuar faturando; limitar cotas de aplicação é necessário onde o risco existe.

**DNS e e-mail:** DNSSEC protege integridade de respostas DNS quando toda a cadeia funciona, mas não substitui HTTPS; CAA controla autoridades certificadoras; SPF, DKIM e DMARC cobrem mecanismos diferentes de autenticação de e-mail. Evolua DMARC somente após verificar remetentes legítimos para evitar bloquear mensagens.

**Descomissionamento:** descarte de dados deve respeitar retenções legais/contratuais e backups. Não declare eliminação completa se existirem cópias sujeitas a retenção. A referência NIST SP 800-88 trata de sanitização de mídia; consulte a edição vigente ao adotar procedimentos.

**Lock-in:** nenhuma arquitetura elimina todos os acoplamentos; registre custos e escolha o isolamento proporcional ao risco, sem transformar toda biblioteca em camada abstrata desnecessária.

**Fontes complementares:** [FinOps Framework](https://www.finops.org/framework/), [RFC 7208 SPF](https://www.rfc-editor.org/rfc/rfc7208), [RFC 6376 DKIM](https://www.rfc-editor.org/rfc/rfc6376), [RFC 7489 DMARC](https://www.rfc-editor.org/rfc/rfc7489), [RFC 8659 CAA](https://www.rfc-editor.org/rfc/rfc8659), [ICANN domain management](https://www.icann.org/).
