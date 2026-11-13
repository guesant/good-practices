# Testes avançados, acessibilidade, privacidade e IA confiável

Guia de controles com verificação e evidência; os P0 são bloqueadores apenas quando aplicáveis ao projeto. Ferramentas automatizadas reduzem trabalho, mas **não substituem revisão humana**, avaliações contextuais e testes de acessibilidade com tecnologia assistiva.

## Testes avançados, concorrência e qualidade de verificação

Fonte temática: [https://owasp.org/www-project-web-security-testing-guide/](https://owasp.org/www-project-web-security-testing-guide/). Perfis: all.

- [ ] **TEST-01 [P0]** Definir estratégia de testes orientada a risco e requisitos funcionais/não funcionais. **Verificação:** Relacionar cada requisito crítico a um teste. **Evidência:** Matriz requisito → teste.
- [ ] **TEST-02 [P0]** Manter testes de regressão para falhas graves e incidentes anteriores. **Verificação:** Reproduzir bug antes e depois da correção. **Evidência:** Teste automatizado e issue.
- [ ] **TEST-03 [P0]** Testar concorrência e atomicidade de operações que alteram estado sensível. **Verificação:** Executar requisições simultâneas e retries. **Evidência:** Teste de race condition.
- [ ] **TEST-04 [P1]** Empregar testes baseados em propriedades para invariantes e casos combinatórios úteis. **Verificação:** Gerar entradas com semente reproduzível. **Evidência:** Relatório de property-based test.
- [ ] **TEST-05 [P1]** Aplicar fuzzing a parsers, protocolos, arquivos, serialização e entradas de alto risco. **Verificação:** Executar corpus e registrar crashes. **Evidência:** Corpus e relatório de fuzz.
- [ ] **TEST-06 [P1]** Avaliar mutation testing para medir se testes detectam defeitos, não apenas linhas executadas. **Verificação:** Rodar mutantes em módulos críticos. **Evidência:** Mutation score com análise.
- [ ] **TEST-07 [P1]** Testar limites numéricos, fusos horários, Unicode, localização, grandes payloads e campos ausentes. **Verificação:** Executar tabela de casos limites. **Evidência:** Fixtures e resultados.
- [ ] **TEST-08 [P1]** Incluir testes de contrato e de compatibilidade retroativa de APIs e eventos. **Verificação:** Rodar matriz entre versões. **Evidência:** Relatório de contratos.
- [ ] **TEST-09 [P1]** Testar isolamento multi-tenant e autorização por recurso/ação. **Verificação:** Executar acessos cruzados. **Evidência:** Matriz de permissões.
- [ ] **TEST-10 [P1]** Testar idempotência, entrega duplicada, timeout e queda de worker. **Verificação:** Injetar retries e interromper job. **Evidência:** Teste de processamento resiliente.
- [ ] **TEST-11 [P1]** Testar recuperação de backup, rollback e migrações com dados representativos. **Verificação:** Executar exercício de restauração. **Evidência:** Relatório de recuperação.
- [ ] **TEST-12 [P1]** Aplicar testes de carga, soak e picos com SLO e dados de capacidade. **Verificação:** Executar cenário de volume realista. **Evidência:** Resultados de latência/saturação.
- [ ] **TEST-13 [P1]** Investigar flakiness de testes e evitar apagar testes sem correção da causa. **Verificação:** Reexecutar testes intermitentes e correlacionar logs. **Evidência:** Histórico de falhas.
- [ ] **TEST-14 [P1]** Registrar cobertura por risco/funcionalidade, não apenas percentual bruto de código. **Verificação:** Mapear caminhos críticos com testes. **Evidência:** Matriz de cobertura funcional.
- [ ] **TEST-15 [P1]** Executar testes de acessibilidade, segurança e resiliência com ferramentas e revisão humana. **Verificação:** Validar pipeline e relatório independente. **Evidência:** Evidência de testes especializados.
- [ ] **TEST-16 [P2]** Executar testes de performance diferencial entre commits com baseline confiável. **Verificação:** Comparar execução em ambiente estável. **Evidência:** Relatório de regressão.
- [ ] **TEST-17 [P2]** Introduzir differential testing entre implementações para algoritmos críticos. **Verificação:** Comparar resultados de oráculos independentes. **Evidência:** Relatório diferencial.

## Acessibilidade real e inclusão digital

Fonte temática: [https://www.w3.org/TR/WCAG22/](https://www.w3.org/TR/WCAG22/). Perfis: web, saas, docs, mobile.

- [ ] **A11Y-01 [P0]** Definir meta de acessibilidade coerente com requisitos legais e público, preferencialmente WCAG 2.2 AA para produto web. **Verificação:** Mapear critérios aplicáveis e jornadas. **Evidência:** Matriz WCAG por interface.
- [ ] **A11Y-02 [P0]** Garantir navegação completa por teclado, foco visível e ordem de foco lógica. **Verificação:** Executar jornadas sem mouse. **Evidência:** Registro de teste teclado.
- [ ] **A11Y-03 [P0]** Garantir rótulos, nomes acessíveis e identificação de erro em formulários. **Verificação:** Testar com leitor de tela e inspeção. **Evidência:** Relatório de formulários.
- [ ] **A11Y-04 [P0]** Verificar contraste e legibilidade em estados normais, erro, hover e desabilitado. **Verificação:** Medir contraste e revisar casos. **Evidência:** Resultados de contraste.
- [ ] **A11Y-05 [P1]** Executar axe-core, Pa11y ou similar como triagem automatizada. **Verificação:** Rodar testes sobre páginas representativas. **Evidência:** Relatório de scanner.
- [ ] **A11Y-06 [P1]** Não confundir scanner sem alertas com conformidade WCAG: executar revisão manual e testes assistivos. **Verificação:** Fazer amostragem com NVDA, VoiceOver ou equivalente. **Evidência:** Roteiro de teste assistivo.
- [ ] **A11Y-07 [P1]** Testar zoom 200%-400%, reflow, orientação e redimensionamento de texto. **Verificação:** Navegar nas resoluções definidas. **Evidência:** Capturas de teste.
- [ ] **A11Y-08 [P1]** Fornecer alternativa textual para conteúdo informativo visual. **Verificação:** Revisar imagens, gráficos e diagramas. **Evidência:** Inventário de alternativas.
- [ ] **A11Y-09 [P1]** Testar mensagens dinâmicas, notificações, modais e mudanças de rota em SPA com tecnologias assistivas. **Verificação:** Executar jornada com leitor de tela. **Evidência:** Relatório de anúncio de estado.
- [ ] **A11Y-10 [P1]** Validar semântica HTML, landmarks, headings, ARIA e estados de componentes. **Verificação:** Inspecionar accessibility tree. **Evidência:** Checklist de semântica.
- [ ] **A11Y-11 [P1]** Garantir suporte a reduced motion e evitar animações que atrapalhem acesso. **Verificação:** Ativar prefers-reduced-motion. **Evidência:** Teste de preferência.
- [ ] **A11Y-12 [P1]** Testar áreas de toque, arrastar, autenticadores acessíveis e alternativas a gestos complexos. **Verificação:** Executar fluxo em mobile e teclado. **Evidência:** Roteiro de acessibilidade.
- [ ] **A11Y-13 [P1]** Fornecer legendas/transcrições para mídia conforme requisitos aplicáveis. **Verificação:** Revisar vídeos/áudios publicados. **Evidência:** Inventário de mídia acessível.
- [ ] **A11Y-14 [P1]** Corrigir impedimentos críticos antes de publicar funcionalidades essenciais. **Verificação:** Revisar issues por severidade. **Evidência:** Registro de bloqueios resolvidos.
- [ ] **A11Y-15 [P2]** Conduzir testes com pessoas com deficiência e incorporar achados. **Verificação:** Executar estudo consentido. **Evidência:** Relatório de pesquisa.

## Privacidade por concepção, ciclo de vida e minimização de dados

Fonte temática: [https://www.nist.gov/privacy-framework](https://www.nist.gov/privacy-framework). Perfis: saas, api, data, web, ai.

- [ ] **PRIV-01 [P0]** Inventariar dados pessoais, suas fontes, finalidades, bases aplicáveis, destinos e acessos. **Verificação:** Traçar fluxo de dados por serviço. **Evidência:** Mapa de tratamento de dados.
- [ ] **PRIV-02 [P0]** Minimizar coleta, armazenamento, telemetria e compartilhamento ao estritamente necessário. **Verificação:** Comparar campos coletados às finalidades. **Evidência:** Revisão de campos.
- [ ] **PRIV-03 [P0]** Garantir acesso limitado por finalidade, identidade e menor privilégio. **Verificação:** Testar permissões por papel. **Evidência:** Matriz de acesso a dados.
- [ ] **PRIV-04 [P0]** Não transmitir dados pessoais ou segredos desnecessários a logs, analytics, serviços de IA e ferramentas de erro. **Verificação:** Inspecionar payloads de observabilidade. **Evidência:** Registro de inspeção sanitizada.
- [ ] **PRIV-05 [P0]** Definir retenção, exclusão e resposta às solicitações de titulares conforme lei aplicável. **Verificação:** Testar exclusão em ambiente controlado. **Evidência:** Política e teste de eliminação.
- [ ] **PRIV-06 [P1]** Definir tratamento de dados excluídos em backups e cópias imutáveis, com prazo de expurgo apropriado. **Verificação:** Revisar retenção e restauração após exclusão. **Evidência:** Teste de restauração e retenção.
- [ ] **PRIV-07 [P1]** Oferecer exportação de dados ou portabilidade quando houver obrigação ou compromisso. **Verificação:** Executar exportação completa de teste. **Evidência:** Arquivo de export validado.
- [ ] **PRIV-08 [P1]** Documentar compartilhamentos, subprocessadores, países/regiões e localização dos dados. **Verificação:** Auditar contratos e arquitetura. **Evidência:** Matriz de fornecedores.
- [ ] **PRIV-09 [P1]** Aplicar anonimização/pseudonimização e segregação de dados em desenvolvimento e testes. **Verificação:** Verificar se reidentificação é possível. **Evidência:** Relatório de dados sintéticos.
- [ ] **PRIV-10 [P1]** Proteger identificadores em URLs, logs, traces e analytics. **Verificação:** Executar inspeção de endpoints e headers. **Evidência:** Relatório de exposição.
- [ ] **PRIV-11 [P1]** Realizar avaliação de impacto à privacidade para dados sensíveis ou riscos elevados. **Verificação:** Executar avaliação contextual. **Evidência:** Documento de impacto e mitigação.
- [ ] **PRIV-12 [P1]** Testar retenção e eliminação em cache, filas, search indexes, data lakes e backups quando aplicável. **Verificação:** Executar cenário ponta a ponta. **Evidência:** Evidência de exclusão distribuída.
- [ ] **PRIV-13 [P1]** Garantir transparência sobre coleta, cookies, tracking, bases e meios de contato. **Verificação:** Revisar experiência e política. **Evidência:** Textos publicados.
- [ ] **PRIV-14 [P1]** Estabelecer notificação e tratamento de incidentes com dados pessoais. **Verificação:** Simular incidente e comunicação. **Evidência:** Plano e exercício.
- [ ] **PRIV-15 [P1]** Medir privacidade de terceiros integrados, incluindo analytics, CDNs e fontes embutidas. **Verificação:** Inspecionar requests no navegador. **Evidência:** Mapa de terceiros.
- [ ] **PRIV-16 [P2]** Executar privacy threat modeling dedicado para mudanças de arquitetura. **Verificação:** Revisar cenários de correlacionamento/identificação. **Evidência:** Modelo de ameaças de privacidade.

## Segurança, qualidade e governança de IA e agentes

Fonte temática: [https://genai.owasp.org/llm-top-10/](https://genai.owasp.org/llm-top-10/). Perfis: ai, saas, api.

- [ ] **AIG-01 [P0]** Identificar todos os usos de IA e distinguir geração de texto de agentes capazes de executar ações. **Verificação:** Inventariar modelos, ferramentas e acessos. **Evidência:** Inventário de aplicações de IA.
- [ ] **AIG-02 [P0]** Tratar texto de usuário, arquivos, páginas recuperadas e resultados de ferramentas como entradas não confiáveis. **Verificação:** Executar testes de prompt injection. **Evidência:** Relatório de red teaming.
- [ ] **AIG-03 [P0]** Nunca permitir que instruções de um modelo sejam tratadas como autorização para acessar dados ou executar operações. **Verificação:** Testar tool calls com contas sem permissão. **Evidência:** Matriz de autorização do agente.
- [ ] **AIG-04 [P0]** Limitar escopo e privilégios de ferramentas do agente, especialmente execução de código, browser, DB e e-mail. **Verificação:** Revisar permissões e testar operações negadas. **Evidência:** Matriz de ferramentas e decisões.
- [ ] **AIG-05 [P0]** Impedir envio de segredos, chaves e dados privados a modelos sem finalidade e autorização. **Verificação:** Testar filtros/redações e integrações. **Evidência:** Relatório de vazamento de dados.
- [ ] **AIG-06 [P0]** Definir cotas, budgets e limites de tokens, tempo, concorrência e chamadas externas. **Verificação:** Simular abuso de consumo. **Evidência:** Teste de custos e limites.
- [ ] **AIG-07 [P1]** Criar dataset de avaliação versionado com cenários reais, adversariais e de erro. **Verificação:** Rodar avaliações com versão de modelo e seed. **Evidência:** Relatório de eval reproduzível.
- [ ] **AIG-08 [P1]** Medir qualidade factual, alucinação, precisão, robustez e vieses conforme contexto. **Verificação:** Comparar outputs a ground truth e revisão. **Evidência:** Métricas de qualidade.
- [ ] **AIG-09 [P1]** Sanitizar e validar saída do modelo antes de renderizar HTML, executar comandos ou alterar dados. **Verificação:** Testar output handling malicioso. **Evidência:** Teste de saída segura.
- [ ] **AIG-10 [P1]** Isolar execução de código gerado e impor sandbox com rede, filesystem e tempo limitados. **Verificação:** Executar comando de teste restrito. **Evidência:** Relatório de sandbox.
- [ ] **AIG-11 [P1]** Aplicar aprovação humana a ações irreversíveis ou de alto impacto. **Verificação:** Testar fluxo de aprovação e auditoria. **Evidência:** Fluxo de aprovação.
- [ ] **AIG-12 [P1]** Monitorar latência, uso, tokens, falhas, prompts bloqueados e custos por usuário. **Verificação:** Inspecionar dashboard sem dados sensíveis. **Evidência:** Dashboard operacional.
- [ ] **AIG-13 [P1]** Documentar modelo, versão, fornecedor, termos de uso e licenças de datasets/outputs. **Verificação:** Revisar manifest e licenças. **Evidência:** Model card / inventário.
- [ ] **AIG-14 [P1]** Avaliar poisoning de dados, RAG e vetores, incluindo recuperação entre tenants. **Verificação:** Testar injeção em documentos e cross-tenant retrieval. **Evidência:** Teste de isolamento RAG.
- [ ] **AIG-15 [P1]** Definir política de retenção e exclusão de conversas, embeddings e datasets. **Verificação:** Executar eliminação em armazenamento vetorial. **Evidência:** Evidência de retenção.
- [ ] **AIG-16 [P1]** Restringir saída de sistema de IA em contextos médicos, jurídicos, financeiros ou de alto impacto. **Verificação:** Revisar risco e controles humanos. **Evidência:** Avaliação de impacto.
- [ ] **AIG-17 [P1]** Manter monitoramento de regressões quando modelo ou prompt for atualizado. **Verificação:** Executar conjunto de avaliações antes de release. **Evidência:** Comparação entre versões.
- [ ] **AIG-18 [P2]** Realizar avaliação de segurança independente para agentes com acesso privilegiado. **Verificação:** Conduzir teste adversarial autorizado. **Evidência:** Relatório e mitigação.
- [ ] **AIG-19 [P2]** Executar avaliação contínua de drift e mudanças de dados/modelo. **Verificação:** Comparar métricas entre períodos. **Evidência:** Painel de drift.

## Notas de aplicação

**Testes avançados:** cobertura de linhas não equivale a qualidade. Use fuzzing para parsers e superfícies de entrada, mutation testing para verificar força do conjunto de testes e property-based testing para invariantes. Registre o escopo, seeds, corpus e ambiente.

**Acessibilidade:** [WCAG 2.2](https://www.w3.org/TR/WCAG22/) contém níveis A, AA e AAA; AA é uma meta comum, não promessa automática de conformidade. axe-core e Pa11y ajudam a detectar alguns problemas. Teclado e leitor de tela exigem revisão manual e testes representativos.

**Privacidade:** distinguir exclusão lógica de exclusão efetiva. Em backups imutáveis, pode haver retenção legítima; registre o prazo, o controle de acesso e o tratamento após eventual restauração. Tratamento de dados pessoais exige revisão da legislação pertinente, como LGPD, quando aplicável.

**IA:** o [OWASP Top 10 para LLMs 2025](https://genai.owasp.org/llm-top-10/) destaca prompt injection, vazamento de informação sensível, supply chain, poisoning, output handling, agência excessiva, vazamento de system prompt, fraquezas em vetores/embeddings, desinformação e consumo não limitado. Um prompt de sistema não é mecanismo de autorização.
