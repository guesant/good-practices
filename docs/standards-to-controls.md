# Requisitos verificáveis inspirados em NIST, ISO/IEC/IEEE e outros referenciais

**Objetivo:** converter temas dos referenciais em um checklist de engenharia, desenvolvimento, segurança, arquitetura, qualidade e operação, útil mesmo sem intenção de certificação.

**Limites e honestidade normativa:** esta é uma **síntese autoral, operacional e não exaustiva**. Não reproduz literalmente normas protegidas por direitos autorais, nem substitui versões oficiais licenciadas, anexos, tabelas de controles, avaliações, auditorias ou análise de aplicabilidade. Os IDs abaixo são **locais deste guia, não números oficiais de cláusulas**. Uma prática associada a uma norma pode ser uma implementação sugerida de um objetivo, e não uma obrigação explícita da norma. Em caso de auditoria, mapear cada controle à cláusula oficial e à edição correta.

**Evidência mínima por requisito:** responsável, aplicabilidade, riscos, critério de aceite mensurável, como testar, configuração/procedimento, última evidência, resultado e exceções.

Referências oficiais gerais: [NIST CSF 2.0](https://www.nist.gov/cyberframework), [NIST SP 800-53 Rev. 5](https://csrc.nist.gov/pubs/sp/800/53/r5/final), [NIST SSDF](https://csrc.nist.gov/pubs/sp/800/218/final), [Catálogo ISO](https://www.iso.org/standards.html), [IEC](https://webstore.iec.ch/), [IEEE](https://standards.ieee.org/).

## 1. Requisitos não funcionais: ISO/IEC 25010:2023

A [ISO/IEC 25010:2023](https://www.iso.org/standard/78176.html) define nove características de qualidade de produto. Os itens abaixo são desdobramentos práticos **propostos para especificação e avaliação**, não transcrições normativas.

### NFR-FS: Adequação funcional

**Referência temática:** ISO/IEC 25010:2023.

- [ ] **NFR-FS-01** Identificar funcionalidades prometidas e mapear cada uma às necessidades de usuários e stakeholders.
- [ ] **NFR-FS-02** Definir critérios de aceite para completude, correção e adequação dos resultados.
- [ ] **NFR-FS-03** Especificar comportamentos normais, casos-limite, falhas e condições de entrada.
- [ ] **NFR-FS-04** Executar testes de comportamento e de regressão sobre requisitos críticos.

### NFR-PE: Eficiência de desempenho

**Referência temática:** ISO/IEC 25010:2023.

- [ ] **NFR-PE-01** Definir latência e percentis de resposta (por exemplo, p95 e p99) por operação crítica.
- [ ] **NFR-PE-02** Definir throughput, tempo de processamento, capacidade e consumo máximo de recursos.
- [ ] **NFR-PE-03** Executar carga, estresse e testes de degradação representativos.
- [ ] **NFR-PE-04** Medir desempenho com cargas e ambiente reproduzíveis, comparando com limites de aceite.

### NFR-CO: Compatibilidade

**Referência temática:** ISO/IEC 25010:2023.

- [ ] **NFR-CO-01** Definir versões suportadas de SO, navegador, linguagem, protocolos e dependências.
- [ ] **NFR-CO-02** Validar interoperabilidade, formatos abertos e contratos entre sistemas.
- [ ] **NFR-CO-03** Testar coexistência com outros serviços sem interferência indevida.
- [ ] **NFR-CO-04** Documentar compatibilidade retroativa e política de mudanças incompatíveis.

### NFR-IC: Capacidade de interação

**Referência temática:** ISO/IEC 25010:2023.

- [ ] **NFR-IC-01** Identificar públicos, tarefas, capacidades e necessidades de acessibilidade.
- [ ] **NFR-IC-02** Testar clareza, orientação, consistência, prevenção de erro e facilidade de aprendizado.
- [ ] **NFR-IC-03** Verificar navegação por teclado, tecnologias assistivas e feedback de ações.
- [ ] **NFR-IC-04** Usar testes com pessoas representativas quando o produto exigir validação de usabilidade.

### NFR-RE: Confiabilidade

**Referência temática:** ISO/IEC 25010:2023.

- [ ] **NFR-RE-01** Definir meta de disponibilidade e janela de observação para serviços.
- [ ] **NFR-RE-02** Especificar comportamento sob falhas de dependências, rede, processos e dados.
- [ ] **NFR-RE-03** Implementar recuperação, retries controlados, tolerância a falhas e failover quando necessários.
- [ ] **NFR-RE-04** Testar recuperação, integridade de estado e comportamento em condições degradadas.

### NFR-SE: Segurança

**Referência temática:** ISO/IEC 25010:2023.

- [ ] **NFR-SE-01** Definir requisitos de confidencialidade, integridade, autenticidade e responsabilização.
- [ ] **NFR-SE-02** Modelar ameaças, fronteiras de confiança, perfis de acesso e abuso.
- [ ] **NFR-SE-03** Estabelecer critérios testáveis para autenticação, autorização, auditoria e proteção de dados.
- [ ] **NFR-SE-04** Verificar segurança por testes automatizados, revisão e avaliação manual proporcional ao risco.

### NFR-MA: Manutenibilidade

**Referência temática:** ISO/IEC 25010:2023.

- [ ] **NFR-MA-01** Documentar arquitetura, decisões, interfaces e responsabilidades.
- [ ] **NFR-MA-02** Estabelecer testes e métricas de cobertura relevantes, sem perseguir cobertura como fim.
- [ ] **NFR-MA-03** Controlar complexidade, dependências, duplicação e acoplamento excessivo.
- [ ] **NFR-MA-04** Verificar facilidade de modificação e diagnóstico por meio de revisão, refatoração e testes.

### NFR-FL: Flexibilidade

**Referência temática:** ISO/IEC 25010:2023.

- [ ] **NFR-FL-01** Definir pontos de configuração e adaptação que evitam alterações desnecessárias do código.
- [ ] **NFR-FL-02** Verificar instalação, substituição de dependências e portabilidade para ambientes suportados.
- [ ] **NFR-FL-03** Documentar escalabilidade horizontal/vertical apenas onde o produto requer.
- [ ] **NFR-FL-04** Testar mudanças planejadas de ambiente e capacidade sem quebra de funcionalidades essenciais.

### NFR-SA: Segurança contra danos (safety)

**Referência temática:** ISO/IEC 25010:2023.

- [ ] **NFR-SA-01** Identificar riscos de danos físicos, financeiros, sociais ou a pessoas causados por falhas do produto.
- [ ] **NFR-SA-02** Estabelecer limites seguros, modos de falha previsíveis e controles de contenção.
- [ ] **NFR-SA-03** Avaliar riscos de uso indevido, operações irreversíveis e decisões automatizadas.
- [ ] **NFR-SA-04** Exigir revisão especializada em contextos médicos, industriais, automotivos ou de risco elevado.

## 2. NIST Cybersecurity Framework 2.0: seis funções

O [NIST CSF 2.0](https://www.nist.gov/cyberframework) organiza resultados de segurança em Govern, Identify, Protect, Detect, Respond e Recover. As verificações seguintes são **exemplos de implementação** desses resultados.

### CSF-GV: Governar (GV)

**Referência temática:** NIST CSF 2.0.

- [ ] **CSF-GV-01** Definir política de segurança, apetite de risco, responsabilidades e prestação de contas.
- [ ] **CSF-GV-02** Mapear obrigações legais, compromissos contratuais e requisitos de stakeholders.
- [ ] **CSF-GV-03** Estabelecer governança de fornecedores, dependências e mudanças de risco.
- [ ] **CSF-GV-04** Revisar efetividade dos controles, decisões e exceções com periodicidade definida.

### CSF-ID: Identificar (ID)

**Referência temática:** NIST CSF 2.0.

- [ ] **CSF-ID-01** Inventariar hardware, software, serviços, usuários, dependências e informações críticas.
- [ ] **CSF-ID-02** Mapear processos, fluxos, riscos e superfícies de exposição.
- [ ] **CSF-ID-03** Avaliar criticidade, impacto, vulnerabilidades e ameaças.
- [ ] **CSF-ID-04** Manter registro e revisão periódica de riscos e ativos.

### CSF-PR: Proteger (PR)

**Referência temática:** NIST CSF 2.0.

- [ ] **CSF-PR-01** Aplicar identidade, MFA, autorização mínima e gestão de segredos.
- [ ] **CSF-PR-02** Configurar hardening, treinamento e segurança das plataformas.
- [ ] **CSF-PR-03** Proteger dados em repouso, trânsito, backup e descarte.
- [ ] **CSF-PR-04** Reduzir superfícies de ataque por isolamento, segmentação e configurações seguras.

### CSF-DE: Detectar (DE)

**Referência temática:** NIST CSF 2.0.

- [ ] **CSF-DE-01** Instrumentar eventos de segurança com logs e métricas pertinentes.
- [ ] **CSF-DE-02** Definir casos de uso de detecção com alertas acionáveis.
- [ ] **CSF-DE-03** Proteger integridade, acesso e retenção dos logs.
- [ ] **CSF-DE-04** Testar detecções e reduzir falsos positivos relevantes.

### CSF-RS: Responder (RS)

**Referência temática:** NIST CSF 2.0.

- [ ] **CSF-RS-01** Definir severidade, responsáveis, comunicação e procedimentos de resposta.
- [ ] **CSF-RS-02** Preparar isolamento, revogação de credenciais e contenção de incidentes.
- [ ] **CSF-RS-03** Preservar evidências respeitando privacidade e cadeia de custódia.
- [ ] **CSF-RS-04** Registrar causas, danos, correções e comunicação de incidentes.

### CSF-RC: Recuperar (RC)

**Referência temática:** NIST CSF 2.0.

- [ ] **CSF-RC-01** Definir RPO, RTO e prioridades de recuperação.
- [ ] **CSF-RC-02** Manter backups, redundância e planos de reconstrução necessários.
- [ ] **CSF-RC-03** Executar testes periódicos de restauração e continuidade.
- [ ] **CSF-RC-04** Revisar resiliência, lições aprendidas e condições de retorno à operação.

## 3. NIST SP 800-53 Rev. 5: vinte famílias de controles

O [NIST SP 800-53](https://csrc.nist.gov/pubs/sp/800/53/r5/final) contém um catálogo amplo de controles de segurança e privacidade. **Esta matriz tematicamente cobre as 20 famílias**, mas não cada controle ou enhancement. Para conformidade formal, selecionar baseline e consultar o catálogo oficial, inclusive parâmetros definidos pela organização.

### 53-AC: Controle de acesso

**Referência temática:** NIST SP 800-53 Rev. 5 (AC).

- [ ] **53-AC-01** Definir RBAC/ABAC ou modelo apropriado e políticas de acesso por recurso.
- [ ] **53-AC-02** Aplicar menor privilégio, segregação de funções e revisão periódica de permissões.

### 53-AT: Conscientização e treinamento

**Referência temática:** NIST SP 800-53 Rev. 5 (AT).

- [ ] **53-AT-01** Treinar equipe sobre phishing, engenharia social e tratamento de segredos.
- [ ] **53-AT-02** Registrar treinamento proporcional às funções e riscos.

### 53-AU: Auditoria e responsabilização

**Referência temática:** NIST SP 800-53 Rev. 5 (AU).

- [ ] **53-AU-01** Definir eventos auditáveis e retenção compatível com riscos e privacidade.
- [ ] **53-AU-02** Proteger logs contra adulteração e restringir sua leitura.

### 53-CA: Avaliação, autorização e monitoramento

**Referência temática:** NIST SP 800-53 Rev. 5 (CA).

- [ ] **53-CA-01** Manter calendário de revisão e teste dos controles selecionados.
- [ ] **53-CA-02** Registrar falhas, autorizações, exceções e ações corretivas.

### 53-CM: Gestão de configuração

**Referência temática:** NIST SP 800-53 Rev. 5 (CM).

- [ ] **53-CM-01** Versionar baselines e configurações críticas, incluindo IaC.
- [ ] **53-CM-02** Revisar mudanças, hardening, configurações-padrão e configuração drift.

### 53-CP: Planejamento de contingência

**Referência temática:** NIST SP 800-53 Rev. 5 (CP).

- [ ] **53-CP-01** Definir cenários de interrupção, RPO/RTO e plano de continuidade.
- [ ] **53-CP-02** Testar restauração e capacidade de recuperação com dados representativos.

### 53-IA: Identificação e autenticação

**Referência temática:** NIST SP 800-53 Rev. 5 (IA).

- [ ] **53-IA-01** Usar identidades individuais, MFA e autenticação apropriada ao risco.
- [ ] **53-IA-02** Proteger autenticadores, sessões, dispositivos e mecanismos de recuperação.

### 53-IR: Resposta a incidentes

**Referência temática:** NIST SP 800-53 Rev. 5 (IR).

- [ ] **53-IR-01** Criar playbooks para vazamento, ransomware, perda de chaves e comprometimento de contas.
- [ ] **53-IR-02** Realizar exercícios e registrar lições aprendidas.

### 53-MA: Manutenção

**Referência temática:** NIST SP 800-53 Rev. 5 (MA).

- [ ] **53-MA-01** Planejar atualizações, correções de vulnerabilidades e mudanças controladas.
- [ ] **53-MA-02** Restringir acesso de manutenção e registrar atividades críticas.

### 53-MP: Proteção de mídia

**Referência temática:** NIST SP 800-53 Rev. 5 (MP).

- [ ] **53-MP-01** Criptografar e proteger mídias e backups com dados relevantes.
- [ ] **53-MP-02** Aplicar retenção e descarte seguro de dispositivos e arquivos.

### 53-PE: Proteção física e ambiental

**Referência temática:** NIST SP 800-53 Rev. 5 (PE).

- [ ] **53-PE-01** Proteger equipamentos e dispositivos com chaves e dados sensíveis.
- [ ] **53-PE-02** Avaliar energia, incêndio, acesso físico e contingências quando houver infraestrutura própria.

### 53-PL: Planejamento

**Referência temática:** NIST SP 800-53 Rev. 5 (PL).

- [ ] **53-PL-01** Definir plano de segurança e responsabilidade por sistemas e dados.
- [ ] **53-PL-02** Revisar o plano com mudanças de escopo e ameaças.

### 53-PM: Gestão do programa

**Referência temática:** NIST SP 800-53 Rev. 5 (PM).

- [ ] **53-PM-01** Definir estratégia de risco e responsabilidades institucionais.
- [ ] **53-PM-02** Medir maturidade, prioridades e eficácia dos controles de segurança.

### 53-PS: Segurança de pessoal

**Referência temática:** NIST SP 800-53 Rev. 5 (PS).

- [ ] **53-PS-01** Definir acesso no ingresso, mudança de função e desligamento.
- [ ] **53-PS-02** Orientar colaboradores e terceiros quanto a confidencialidade e responsabilidades.

### 53-PT: Tratamento e transparência de dados pessoais

**Referência temática:** NIST SP 800-53 Rev. 5 (PT).

- [ ] **53-PT-01** Documentar base, finalidade, minimização, retenção e acesso a dados pessoais.
- [ ] **53-PT-02** Oferecer transparência e mecanismos de exercício de direitos quando aplicáveis.

### 53-RA: Avaliação de risco

**Referência temática:** NIST SP 800-53 Rev. 5 (RA).

- [ ] **53-RA-01** Avaliar ameaças, probabilidade, impacto e vulnerabilidades.
- [ ] **53-RA-02** Registrar risco residual, exceções, responsáveis e reavaliação.

### 53-SA: Aquisição de sistemas e serviços

**Referência temática:** NIST SP 800-53 Rev. 5 (SA).

- [ ] **53-SA-01** Definir critérios de segurança em aquisições, integrações e desenvolvimento.
- [ ] **53-SA-02** Avaliar riscos de bibliotecas, fornecedores, produtos e serviços externos.

### 53-SC: Proteção de sistemas e comunicações

**Referência temática:** NIST SP 800-53 Rev. 5 (SC).

- [ ] **53-SC-01** Aplicar TLS, segmentação, isolamento e proteção de fronteiras de confiança.
- [ ] **53-SC-02** Proteger integridade e confidencialidade nos canais e nos dados.

### 53-SI: Integridade de sistemas e informações

**Referência temática:** NIST SP 800-53 Rev. 5 (SI).

- [ ] **53-SI-01** Monitorar atualizações, malware, vulnerabilidades e eventos anormais.
- [ ] **53-SI-02** Testar integridade de dados, artefatos e dependências.

### 53-SR: Gestão de risco da cadeia de suprimentos

**Referência temática:** NIST SP 800-53 Rev. 5 (SR).

- [ ] **53-SR-01** Inventariar componentes e verificar procedência, licenças e vulnerabilidades.
- [ ] **53-SR-02** Aplicar pinning, SBOM, revisão de releases e critérios de fornecedores.

## 4. NIST SSDF: desenvolvimento seguro e proteção da supply chain

[NIST SP 800-218](https://csrc.nist.gov/pubs/sp/800/218/final) organiza práticas em quatro grupos: PO, PS, PW, RV.

### SSDF-PO: Preparar a organização

**Referência temática:** NIST SSDF PO.

- [ ] **SSDF-PO-01** Definir objetivos e requisitos de segurança no SDLC.
- [ ] **SSDF-PO-02** Criar política de ferramentas, formação e governança de desenvolvimento seguro.
- [ ] **SSDF-PO-03** Estabelecer ambientes de build e teste protegidos.
- [ ] **SSDF-PO-04** Estabelecer rastreabilidade entre riscos, regras, testes e evidências.

### SSDF-PS: Proteger o software

**Referência temática:** NIST SSDF PS.

- [ ] **SSDF-PS-01** Restringir acesso a código, pipelines e artefatos.
- [ ] **SSDF-PS-02** Proteger integridade de fontes, dependências e ambientes de build.
- [ ] **SSDF-PS-03** Verificar procedência, assinaturas e atestações quando apropriadas.
- [ ] **SSDF-PS-04** Controlar releases e impedir substituição não autorizada de artefatos.

### SSDF-PW: Produzir software bem protegido

**Referência temática:** NIST SSDF PW.

- [ ] **SSDF-PW-01** Realizar threat modeling de componentes e alterações críticas.
- [ ] **SSDF-PW-02** Adotar padrões seguros e testar casos de abuso.
- [ ] **SSDF-PW-03** Executar análises estáticas, composição de dependências e revisão de código.
- [ ] **SSDF-PW-04** Aplicar verificação de requisitos de segurança e testes de regressão.

### SSDF-RV: Responder às vulnerabilidades

**Referência temática:** NIST SSDF RV.

- [ ] **SSDF-RV-01** Oferecer canal privado e responsável de reporte de vulnerabilidades.
- [ ] **SSDF-RV-02** Realizar triagem, priorização, remediação e avisos coordenados.
- [ ] **SSDF-RV-03** Investigar causa raiz e padrões recorrentes.
- [ ] **SSDF-RV-04** Revisar testes e controles para evitar reincidência.

## 5. Normas ISO/IEC/IEEE: desdobramento operacional por assunto

Os controles a seguir **não são cópias de cláusulas normativas**. São traduções práticas dos temas tratados nas normas. A versão e o status devem ser verificados nas fontes oficiais antes de qualquer alegação de conformidade.

### ISO-27001: Gestão de segurança da informação

**Referência temática:** [ISO/IEC 27001:2022](https://www.iso.org/standard/27001).

- [ ] **ISO-27001-01** Definir escopo, política, objetivos e governança de segurança.
- [ ] **ISO-27001-02** Manter avaliação e tratamento de riscos, incluindo decisões e justificativas.
- [ ] **ISO-27001-03** Definir Statement of Applicability quando houver implantação formal de SGSI.
- [ ] **ISO-27001-04** Medir eficácia, conduzir análises críticas e corrigir não conformidades.

### ISO-27002: Controles organizacionais, pessoas, físicos e tecnológicos

**Referência temática:** [ISO/IEC 27002:2022](https://www.iso.org/standard/75652.html).

- [ ] **ISO-27002-01** Estabelecer controles organizacionais para políticas, ativos, fornecedores e incidentes.
- [ ] **ISO-27002-02** Definir controles relativos a pessoas, capacitação e responsabilidades.
- [ ] **ISO-27002-03** Proteger ambientes físicos, equipamentos e mídias.
- [ ] **ISO-27002-04** Aplicar hardening, proteção de dados, gestão de credenciais, monitoramento e segurança de comunicações.

### ISO-27005: Risco de segurança da informação

**Referência temática:** [ISO/IEC 27005:2022](https://www.iso.org/standard/80585.html).

- [ ] **ISO-27005-01** Definir critérios de risco, impacto e probabilidade.
- [ ] **ISO-27005-02** Identificar, analisar e avaliar cenários de risco.
- [ ] **ISO-27005-03** Selecionar tratamento, responsável e aceitação de risco residual.

### ISO-27701: Gestão de privacidade

**Referência temática:** [ISO/IEC 27701:2025](https://www.iso.org/standards.html).

- [ ] **ISO-27701-01** Inventariar dados pessoais, papéis e finalidades.
- [ ] **ISO-27701-02** Implementar minimização, retenção, transparência e direitos de titulares.
- [ ] **ISO-27701-03** Documentar avaliação de risco de privacidade, incidentes e gestão de terceiros.

### ISO-27017: Segurança de serviços cloud

**Referência temática:** [ISO/IEC 27017:2025](https://www.iso.org/standards.html).

- [ ] **ISO-27017-01** Definir responsabilidade compartilhada entre cliente e provedor cloud.
- [ ] **ISO-27017-02** Restringir acesso a consoles, redes, storage e credenciais cloud.
- [ ] **ISO-27017-03** Revisar isolamento de tenants, configuração e descarte de recursos.

### ISO-27018: Proteção de dados pessoais em cloud

**Referência temática:** [ISO/IEC 27018:2025](https://www.iso.org/standards.html).

- [ ] **ISO-27018-01** Avaliar obrigações de provedores sobre tratamento de dados pessoais.
- [ ] **ISO-27018-02** Restringir uso, acesso e divulgação de dados pessoais conforme contratos e lei.
- [ ] **ISO-27018-03** Validar descarte, localização, subprocessadores e gestão de incidentes.

### ISO-20000: Gestão de serviços de TI

**Referência temática:** [ISO/IEC 20000-1:2018](https://www.iso.org/standard/70636.html).

- [ ] **ISO-20000-01** Manter catálogo de serviços, responsabilidades e acordos.
- [ ] **ISO-20000-02** Definir incidentes, problemas, mudanças, release e disponibilidade.
- [ ] **ISO-20000-03** Medir nível de serviço e estabelecer melhoria contínua.

### ISO-9001: Gestão da qualidade

**Referência temática:** [ISO 9001:2026](https://www.iso.org/standard/9001).

- [ ] **ISO-9001-01** Estabelecer objetivos de qualidade e expectativas de stakeholders.
- [ ] **ISO-9001-02** Definir processos, papéis, registros e gestão de mudanças.
- [ ] **ISO-9001-03** Medir satisfação, desempenho, não conformidades e melhoria contínua.
- [ ] **ISO-9001-04** Considerar riscos, oportunidades, liderança e cultura da qualidade.

### ISO-90003: Qualidade aplicada a software

**Referência temática:** [ISO/IEC/IEEE 90003:2018](https://www.iso.org/standard/74348.html).

- [ ] **ISO-90003-01** Adaptar gestão de qualidade à especificação, desenvolvimento e manutenção.
- [ ] **ISO-90003-02** Manter processo verificável de revisão e entrega.
- [ ] **ISO-90003-03** Documentar critérios de controle de configuração e de testes.

### ISO-12207: Ciclo de vida do software

**Referência temática:** [ISO/IEC/IEEE 12207:2026](https://www.iso.org/standard/90219.html).

- [ ] **ISO-12207-01** Definir atividades e responsabilidades de aquisição, desenvolvimento, entrega e operação.
- [ ] **ISO-12207-02** Planejar sustentação, manutenção, suporte e retirada do produto.
- [ ] **ISO-12207-03** Registrar resultados e evidências suficientes a cada etapa.
- [ ] **ISO-12207-04** Adaptar processo ao porte e contexto sem impor metodologia ágil ou cascata.

### ISO-29148: Engenharia de requisitos

**Referência temática:** [ISO/IEC/IEEE 29148:2018](https://www.iso.org/standard/72089.html).

- [ ] **ISO-29148-01** Identificar interessados, necessidades, restrições e objetivos.
- [ ] **ISO-29148-02** Especificar requisitos funcionais e não funcionais claros e verificáveis.
- [ ] **ISO-29148-03** Garantir rastreabilidade, gestão de mudanças e validação de requisitos.
- [ ] **ISO-29148-04** Definir critérios de aceitação e prioridades por risco e valor.

### ISO-42010: Descrição de arquitetura

**Referência temática:** [ISO/IEC/IEEE 42010:2022](https://www.iso.org/standard/74393.html).

- [ ] **ISO-42010-01** Identificar stakeholders e preocupações arquiteturais relevantes.
- [ ] **ISO-42010-02** Manter visões apropriadas de componentes, dados, implantação e segurança.
- [ ] **ISO-42010-03** Registrar decisões, opções, restrições, trade-offs e justificativas.
- [ ] **ISO-42010-04** Verificar consistência das visões e atualizar após mudanças materiais.

### ISO-29119: Testes de software

**Referência temática:** [Série ISO/IEC/IEEE 29119](https://www.iso.org/standard/81291.html).

- [ ] **ISO-29119-01** Definir estratégia, técnicas e níveis de teste conforme risco.
- [ ] **ISO-29119-02** Documentar casos, dados e oráculos de teste, além de resultados.
- [ ] **ISO-29119-03** Registrar defeitos, severidade, reprodução e regressão.
- [ ] **ISO-29119-04** Verificar requisitos não funcionais com testes específicos.

### ISO-5055: Qualidade estrutural

**Referência temática:** [ISO/IEC 5055:2021](https://www.iso.org/standard/80623.html).

- [ ] **ISO-5055-01** Investigar defeitos estruturais relevantes para confiabilidade, segurança e manutenibilidade.
- [ ] **ISO-5055-02** Acompanhar métricas estruturalmente úteis sem presumir equivalência entre lint e a medida da norma.
- [ ] **ISO-5055-03** Priorizar problemas pela exposição, impacto e tendência.

### ISO-38500: Governança de TI

**Referência temática:** [ISO/IEC 38500:2024](https://www.iso.org/standard/81684.html).

- [ ] **ISO-38500-01** Definir quem avalia, direciona e monitora decisões tecnológicas.
- [ ] **ISO-38500-02** Atribuir responsabilidades e prestar contas sobre gastos, riscos e desempenho.
- [ ] **ISO-38500-03** Relacionar decisões de TI aos resultados e necessidades do projeto.

### ISO-31000: Gestão de riscos geral

**Referência temática:** [ISO 31000:2018](https://www.iso.org/standard/65694.html).

- [ ] **ISO-31000-01** Manter critérios transparentes para avaliar riscos.
- [ ] **ISO-31000-02** Incorporar risco ao planejamento e à tomada de decisões.
- [ ] **ISO-31000-03** Revisar a efetividade de tratamentos e riscos residuais.

### ISO-42001: Sistema de gestão de IA

**Referência temática:** [ISO/IEC 42001:2023](https://www.iso.org/standard/42001).

- [ ] **ISO-42001-01** Inventariar sistemas e usos de IA por finalidade, responsáveis e dados.
- [ ] **ISO-42001-02** Definir governança de IA, políticas, decisões e avaliação de riscos.
- [ ] **ISO-42001-03** Monitorar resultados, desempenho, impactos, incidentes e melhorias.
- [ ] **ISO-42001-04** Definir controle humano para decisões sensíveis.

### ISO-42005: Avaliação de impacto de IA

**Referência temática:** [ISO/IEC 42005:2025](https://www.iso.org/standards.html).

- [ ] **ISO-42005-01** Avaliar como sistemas de IA podem afetar pessoas, direitos e oportunidades.
- [ ] **ISO-42005-02** Identificar grupos afetados, danos potenciais e salvaguardas.
- [ ] **ISO-42005-03** Documentar mitigação, monitoramento e reavaliação de impactos.

### ISO-23894: Riscos de IA

**Referência temática:** [ISO/IEC 23894:2023](https://www.iso.org/standard/77304.html).

- [ ] **ISO-23894-01** Avaliar vieses, robustez, privacidade, uso indevido e falhas de IA.
- [ ] **ISO-23894-02** Selecionar e testar mitigação e monitoramento apropriados.
- [ ] **ISO-23894-03** Registrar risco residual e responsáveis por revisões.

### ISO-5259: Qualidade de dados para IA

**Referência temática:** [Série ISO/IEC 5259](https://www.iso.org/standards.html).

- [ ] **ISO-5259-01** Verificar origem, autorização de uso, representatividade e qualidade de datasets.
- [ ] **ISO-5259-02** Medir incompletude, inconsistência, desbalanceamento e drift.
- [ ] **ISO-5259-03** Manter versionamento e documentação do pipeline de dados.

### ISO-25012: Qualidade de dados

**Referência temática:** [ISO/IEC 25012](https://www.iso.org/standards.html).

- [ ] **ISO-25012-01** Definir atributos de qualidade de dados relevantes ao sistema.
- [ ] **ISO-25012-02** Validar correção, completude, consistência e atualidade.
- [ ] **ISO-25012-03** Documentar linhagem e mecanismos de correção.

### ISO-330: Avaliação da capacidade de processos

**Referência temática:** [Série ISO/IEC 330xx](https://www.iso.org/standards.html).

- [ ] **ISO-330-01** Definir processos críticos e evidências de capacidade.
- [ ] **ISO-330-02** Avaliar execução, estabilidade e pontos de melhoria.
- [ ] **ISO-330-03** Evitar declarar nível de maturidade sem metodologia e avaliação apropriadas.

### ISO-24183: Terminologia em comunicação técnica

**Referência temática:** [ISO 24183:2024](https://www.iso.org/standard/78009.html).

- [ ] **ISO-24183-01** Manter glossário de termos técnicos utilizados no projeto.
- [ ] **ISO-24183-02** Usar terminologia coerente na interface, documentação e suporte.
- [ ] **ISO-24183-03** Revisar linguagem com usuários representativos.

### ISO-IEC-19770: Gestão de ativos de software

**Referência temática:** [Série ISO/IEC 19770](https://www.iso.org/standards.html).

- [ ] **ISO-IEC-19770-01** Manter inventário de componentes e respectivas licenças.
- [ ] **ISO-IEC-19770-02** Relacionar versão, proprietário, localização, suporte e estado.
- [ ] **ISO-IEC-19770-03** Revisar uso, renovação e obsolescência de ativos.

## 6. Referências complementares e setoriais: decidir aplicabilidade

A seção de normas do README também cita documentos de documentação, experiência do usuário, modelagem, cloud, IoT, segurança e normas setoriais. Não se deve presumir que uma linguagem de modelagem ou vocabulário seja um conjunto de controles de segurança.

### REF-UX: Usabilidade e comunicação

**Referência temática:** ISO 9241; ISO/IEC 25066 (histórica/retirada); ISO/IEC 2502x e 2504x.

- [ ] **REF-UX-01** Planejar testes de usabilidade com objetivos e participantes adequados.
- [ ] **REF-UX-02** Reportar metodologia, contexto e achados de avaliações de experiência.
- [ ] **REF-UX-03** Verificar edição/status antes de usar formatos retirados como referência formal.

### REF-DOC: Documentação e ciclo de vida

**Referência temática:** ISO/IEC/IEEE 15289; 24748-1; 14764; 15939; 24765; série 29110.

- [ ] **REF-DOC-01** Definir documentos necessários para operação, manutenção e transferência de conhecimento.
- [ ] **REF-DOC-02** Definir manutenção corretiva, adaptativa, perfectiva e preventiva.
- [ ] **REF-DOC-03** Criar métricas com objetivo claro, unidade, fonte e regra de cálculo.
- [ ] **REF-DOC-04** Adaptar processos e artefatos à dimensão da equipe.

### REF-MODEL: Modelagem

**Referência temática:** UML (ISO/IEC 19505); SysML (ISO/IEC 19514); BPMN (ISO/IEC 19510).

- [ ] **REF-MODEL-01** Adotar diagramas somente quando reduzirem ambiguidades.
- [ ] **REF-MODEL-02** Usar notação correta e manter modelos atualizados com o sistema.
- [ ] **REF-MODEL-03** Explicar decisões por texto e exemplos quando diagramas não bastarem.

### REF-SEC: Outros referenciais de segurança

**Referência temática:** ISO/IEC 27000; série 27034; 27035; 27036; 15408 (Common Criteria).

- [ ] **REF-SEC-01** Definir segurança de aplicações ao longo do desenvolvimento.
- [ ] **REF-SEC-02** Planejar tratamento de incidentes, aquisição e riscos de fornecedores.
- [ ] **REF-SEC-03** Não alegar certificação de produto com base em simples uso de controles.

### REF-CLOUD: Cloud e IoT

**Referência temática:** ISO/IEC 22123; ISO/IEC 27400; ISO/IEC 30141; ISO/IEC 17788/17789 (históricas).

- [ ] **REF-CLOUD-01** Definir fronteiras e responsabilidades dos serviços cloud.
- [ ] **REF-CLOUD-02** Avaliar identidade, atualização e proteção de dispositivos IoT, quando existirem.
- [ ] **REF-CLOUD-03** Usar referências históricas somente com aviso de substituição ou status.

### REF-AI: Vocabulário, ciclo de vida e governança de IA

**Referência temática:** ISO/IEC 22989; 23053; 5338; 38507; série ISO 8000; série 38505.

- [ ] **REF-AI-01** Documentar componentes e papéis de IA e ML.
- [ ] **REF-AI-02** Definir processos para treinamento, avaliação, publicação, monitoramento e retirada de modelos.
- [ ] **REF-AI-03** Definir responsabilidades pela governança de dados e sistemas de IA.

### REF-PCI: Pagamentos e dados de cartão

**Referência temática:** PCI DSS 4.0.1.

- [ ] **REF-PCI-01** Determinar se o projeto armazena, processa ou transmite dados de titulares de cartões.
- [ ] **REF-PCI-02** Delimitar cardholder data environment e controles efetivamente aplicáveis.
- [ ] **REF-PCI-03** Avaliar os doze grupos de requisitos e evidências se PCI DSS for aplicável.

### REF-SECTOR: Setores críticos

**Referência temática:** IEC 61508; ISO 26262; IEC 62304; ISO 14971; EN 50128; DO-178C; ARP4754A; Automotive SPICE.

- [ ] **REF-SECTOR-01** Identificar requisitos regulatórios e certificações do domínio antes de desenvolver sistemas críticos.
- [ ] **REF-SECTOR-02** Revisar procedimentos formais de hazard analysis, segurança funcional, rastreabilidade e validação quando aplicáveis.
- [ ] **REF-SECTOR-03** Consultar normas e especialistas setoriais, não substituir processos de safety por testes de software comuns.

## 7. NIST especializado: identidade, chaves, Zero Trust e processos

### NIST-63: Identidade e autenticação

**Referência temática:** [NIST SP 800-63B-4](https://csrc.nist.gov/pubs/sp/800/63/b/4/final).

- [ ] **NIST-63-01** Avaliar o nível de garantia de autenticação necessário ao risco.
- [ ] **NIST-63-02** Preferir autenticação criptográfica resistente a phishing para contas críticas.
- [ ] **NIST-63-03** Proteger vínculo, recuperação, substituição e revogação de autenticadores.
- [ ] **NIST-63-04** Usar tokens FIDO2/passkeys ou outra tecnologia com propriedades equivalentes quando adequado.
- [ ] **NIST-63-05** Diferenciar MFA genérica de resistência a phishing.

### NIST-57: Gestão de chaves criptográficas

**Referência temática:** [NIST SP 800-57 Part 1 Rev. 5](https://csrc.nist.gov/pubs/sp/800/57/pt1/r5/final).

- [ ] **NIST-57-01** Inventariar chaves, certificados, trust anchors e responsáveis.
- [ ] **NIST-57-02** Separar criação, distribuição, uso, rotação, backup e destruição de chaves.
- [ ] **NIST-57-03** Preferir hardware seguro para chaves sensíveis, conforme ameaça e disponibilidade.
- [ ] **NIST-57-04** Evitar expor chaves privadas em logs, repositórios e backups sem proteção.
- [ ] **NIST-57-05** Testar revogação e recuperação, incluindo casos de perda de dispositivo.

### NIST-207: Arquitetura Zero Trust

**Referência temática:** [NIST SP 800-207](https://csrc.nist.gov/pubs/sp/800/207/final).

- [ ] **NIST-207-01** Não confiar automaticamente em identidades por localização de rede.
- [ ] **NIST-207-02** Autenticar e autorizar acesso por recurso e contexto.
- [ ] **NIST-207-03** Aplicar menor privilégio, monitoração e segmentação pertinentes.
- [ ] **NIST-207-04** Reavaliar acesso e condições durante mudanças de risco.

## 8. Matriz de evidências e gestão contínua

- [ ] Construir registro com colunas ID, referencial, edição, tema, controle implementado, evidência, aplicabilidade e responsável.
- [ ] Distinguir norma certificável, diretriz, vocabulário, modelo, padrão de teste e requisito regulatório.
- [ ] Relacionar cada requisito não funcional a um teste, relatório, SLO ou outro resultado verificável.
- [ ] Conectar testes de segurança a modelo de ameaças e riscos documentados.
- [ ] Selecionar controles mínimos para repositórios simples e controles reforçados para serviços críticos.
- [ ] Registrar controles não aplicáveis e justificativas, nunca ocultar omissões.
- [ ] Manter revisões de versão e status da norma, incluindo edições históricas ou substituídas.
- [ ] Fazer revisões humanas e técnicas; automações complementam, não comprovam conformidade integral.
- [ ] Não afirmar certificação, conformidade integral ou auditoria independente sem procedimento apropriado.
- [ ] Manter rastreabilidade de mudanças de requisitos, implementações, verificações e exceções.

### Modelo de definição de requisito não funcional

- **ID**: NFR-PE-01
- **Fonte temática**: ISO/IEC 25010:2023, eficiência de desempenho.
- **Contexto**: endpoint de consulta mais utilizado.
- **Critério mensurável (ilustrativo, não universal)**: p95 de latência inferior a 300 ms com 100 usuários concorrentes no ambiente de referência.
- **Método**: executar teste de carga versionado e gerar relatório com versão, hardware e dataset usados.
- **Evidência**: resultado de CI ou relatório de benchmark.
- **Revisão**: quando houver alteração relevante de workload, infraestrutura ou versão.

**Outros exemplos:** confiabilidade = porcentagem de disponibilidade em janela definida; privacidade = dados retidos por prazo definido; recuperação = RTO/RPO explicitados; manutenibilidade = tempo de execução de testes e mudanças com regressões; segurança = zero autorização indevida nos casos de teste de isolamento.

### Revisão normativa

Conferir a situação vigente de cada edição no [catálogo ISO](https://www.iso.org/standards.html) e nas publicações NIST. Em novembro de 2026, referências atualizadas incluem [ISO 9001:2026](https://www.iso.org/standard/9001), [ISO/IEC/IEEE 12207:2026](https://www.iso.org/standard/90219.html), [ISO/IEC 25010:2023](https://www.iso.org/standard/78176.html) e [NIST SP 800-63B-4 (2025)](https://csrc.nist.gov/pubs/sp/800/63/b/4/final).

**Importante:** para mapeamento controle-a-controle de ISO proprietárias, é necessário consultar uma cópia autorizada das edições integrais. Este documento deliberadamente não pretende reproduzir essas normas.
