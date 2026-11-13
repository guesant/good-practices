# Good Practices: checklist geral de engenharia de software e open source

Checklist extensivo, genérico e reutilizável de práticas de open source, engenharia de software, automação, segurança, qualidade, governança e operação, adaptado a partir de [Open Source Guides](https://opensource.guide/) e de práticas técnicas adotáveis em diferentes projetos.

**Finalidade:** orientar avaliações e melhorias. Esta lista não é certificação de conformidade, avaliação jurídica nem declaração de que cada prática já esteja implementada. Os itens começam desmarcados porque ainda precisam de verificação. Uma caixa desmarcada não prova ausência da prática. A conclusão deve ser acompanhada, quando possível, de referência verificável (arquivo, configuração, issue, commit, política ou procedimento).

**Aplicabilidade:** o checklist é um catálogo de controles, não um conjunto de obrigações para todos os projetos. Avalie cada item como obrigatório para o contexto, recomendado, pendente ou não aplicável. Um repositório de documentação não precisa de todos os controles de uma aplicação produtiva.

## Navegação por área

Este README é o **checklist central**. Os guias vinculados aprofundam configurações, exemplos e evidências.

- [Fundamentos, documentação, licenças, créditos, comunidade e governança](#1-identidade-e-preparação-do-projeto)
- [Conformidade técnica, tooling e quality gates](#11-conformidade-técnica-automatizada)
- [Referenciais de qualidade, segurança e gestão](#12-normas-e-referenciais-de-qualidade-e-conformidade)
- [Serviços, APIs, dados e operação](#13-operação-apis-dados-e-entrega-quando-aplicável)
- [GitHub: merges, rulesets, .github, CODEOWNERS, badges e políticas](#16-perfil-de-configurações-do-github-e-arquivos-obrigatórios-por-contexto)
- [Hardening: YubiKey, passkeys, SSH, sandbox, segredos e infraestrutura](#17-hardening-operacional-identidades-yubikey-ssh-sandbox-e-infraestrutura)
- [ISO/IEC 25010, NIST CSF, SP 800-53, SSDF e demais normas](#18-controles-derivados-de-nist-isoiecieee-e-requisitos-não-funcionais)
- [Pré-implantação, hardening de produção, Go/No-Go, logs, CVEs e observabilidade contínua](#19-pré-implantação-production-readiness-e-operação-contínua)
- [CI, Delivery, Deployment, supply chain, reprodutibilidade, CSPRNG, probes, migrações e workers](#20-cicd-supply-chain-reprodutibilidade-aleatoriedade-probes-migrações-e-workers)
- [Contratos, ASVS, SAMM, OpenSSF, resiliência e monitoramento](docs/contracts-assurance-resilience.md)
- [FinOps, DNS/e-mail, descomissionamento e portabilidade](docs/finops-domains-retirement-portability.md)
- [Testes avançados, acessibilidade, privacidade e IA](docs/advanced-testing-accessibility-privacy-ai.md)
- [Catálogo de controles, schema e perfis por projeto](docs/control-catalog-and-profiles.md)
- [Diátaxis, documentação orientada ao leitor, guias de escrita técnica e Vale](#25-arquitetura-da-documentação-diátaxis-escrita-técnica-e-voz-editorial)

**Guias aprofundados:** [GitHub e README](docs/github-repository-setup.md) · [Hardening](docs/security-hardening.md) · [Normas em controles e requisitos não funcionais](docs/standards-to-controls.md) · [Ferramentas](docs/tooling-configurations.md) · [Créditos e licenças](docs/credits-and-licenses.md) · [Pré-implantação e operação contínua](docs/production-readiness-and-operations.md) · [Entrega segura e processamento em segundo plano](docs/secure-delivery-and-background-processing.md) · [Contratos/ASVS/SAMM e resiliência](docs/contracts-assurance-resilience.md) · [FinOps, DNS e descomissionamento](docs/finops-domains-retirement-portability.md) · [Testes, acessibilidade, privacidade e IA](docs/advanced-testing-accessibility-privacy-ai.md) · [Catálogo e perfis](docs/control-catalog-and-profiles.md).

**Aplicação:** classificar controles como aplicáveis, não aplicáveis ou pendentes de análise; vincular risco, prioridade, responsável, evidência e data de revisão. A existência de um item ou de uma configuração não comprova sua implementação.

## Configurações práticas de ferramentas

O [catálogo de configurações reais dos repositórios de guesant](docs/tooling-configurations.md) reúne exemplos, critérios de adoção e checklists adicionais para ESLint, Biome, Prettier, Stylelint, ast-grep, jscpd, Knip, actionlint, zizmor, Hadolint, Gitleaks, Renovate e outras ferramentas. Qlty está identificado como alternativa ainda sem configuração própria verificada.

## Como acompanhar

- [ ] Revisar a aplicabilidade deste checklist para cada repositório do projeto ou organização.
- [ ] Associar evidências aos requisitos confirmados e registrar pendências em issues.
- [ ] Definir responsáveis e prioridades para os itens aplicáveis.
- [ ] Rever periodicamente o checklist e registrar mudanças relevantes.

## 1. Identidade e preparação do projeto

**Referência:** [Open Source Guides](https://opensource.guide/starting-a-project/).

- [ ] Definir claramente missão, visão e objetivos.
- [ ] Explicar o problema que o projeto pretende resolver.
- [ ] Delimitar o escopo e os limites de atuação.
- [ ] Identificar o público-alvo e os possíveis colaboradores.
- [ ] Explicar a escolha pelo desenvolvimento open source.
- [ ] Definir os tipos de contribuição externa aceitos.
- [ ] Verificar nomes de projetos e eventuais conflitos de marca.
- [ ] Manter um README acessível e atualizado em cada repositório.
- [ ] Informar estágio de desenvolvimento, funcionalidades disponíveis e limitações.
- [ ] Manter um roadmap público com prioridades e dependências.
- [ ] Organizar issues com títulos, descrições e labels.
- [ ] Identificar pessoas responsáveis pela manutenção.
- [ ] Planejar redundância no acesso administrativo quando houver uma equipe.
- [ ] Definir canais e estratégias responsáveis de divulgação.

## 2. Documentação e experiência de contribuição

**Referência:** [Open Source Guides](https://opensource.guide/best-practices/).

- [ ] Revisar o README para explicar finalidade, utilidade, início rápido e ajuda.
- [ ] Publicar ou revisar CONTRIBUTING.md.
- [ ] Explicar como reportar bugs e propor funcionalidades.
- [ ] Documentar configuração do ambiente de desenvolvimento.
- [ ] Descrever como executar testes e validar alterações.
- [ ] Documentar convenções de código, commits e pull requests.
- [ ] Definir critérios de avaliação e aceite de propostas.
- [ ] Disponibilizar templates de issues e pull requests.
- [ ] Separar bugs, ideias, dúvidas e discussões em canais apropriados.
- [ ] Registrar decisões técnicas relevantes e suas justificativas.
- [ ] Documentar arquiteturas, integrações e dependências quando existirem.
- [ ] Manter documentação sincronizada com código e comportamento reais.
- [ ] Aplicar uma política editorial de documentação e arquitetura da informação, conforme [Diátaxis e guias de escrita técnica](#25-arquitetura-da-documentação-diátaxis-escrita-técnica-e-voz-editorial).
- [ ] Informar versões, plataformas e ambientes suportados.
- [ ] Sinalizar conteúdos técnicos desatualizados.
- [ ] Publicar changelogs ou notas de versão quando houver lançamentos.

## 3. Licenciamento e aspectos jurídicos

**Referência:** [Open Source Guides](https://opensource.guide/legal/).

- [ ] Declarar uma licença apropriada em cada repositório.
- [ ] Incluir o texto integral da licença e identificadores claros, quando aplicável.
- [ ] Distinguir licenciamento de software, documentação, dados, imagens e marcas.
- [ ] Registrar atribuições e avisos de direitos autorais pertinentes.
- [ ] Verificar compatibilidade de licenças das dependências.
- [ ] Conferir direitos de uso e redistribuição de materiais de terceiros.
- [ ] Explicar sob qual licença as contribuições serão recebidas.
- [ ] Avaliar se acordos adicionais de contribuição são realmente necessários.
- [ ] Verificar restrições a nomes, logotipos e marcas de terceiros.
- [ ] Documentar critérios para eventuais mudanças de licenciamento.
- [ ] Não presumir que conteúdo público na internet seja livre para reutilização.

## 3.1. Créditos, atribuições, licenças de terceiros e transparência

**Referências:** [Open Source Guides: aspectos jurídicos](https://opensource.guide/legal/), [SPDX](https://spdx.dev/), [REUSE](https://reuse.software/) e [ClearlyDefined](https://clearlydefined.io/). Consulte também o [guia prático de créditos e licenças](docs/credits-and-licenses.md).

- [ ] Criar uma página pública de **Créditos**, acessível pelo README, site ou documentação, para projetos, ferramentas, bibliotecas, recursos e pessoas que contribuíram.
- [ ] Manter inventário atualizado dos componentes de terceiros utilizados, incluindo dependências diretas, runtime, build, desenvolvimento, CI/CD, imagens de contêiner e serviços externos relevantes.
- [ ] Identificar claramente para cada item o nome, finalidade, autor ou organização, URL oficial, licença e versão ou referência utilizada quando pertinente.
- [ ] Reconhecer explicitamente ferramentas gratuitas e open source mesmo quando sua licença não exigir atribuição pública.
- [ ] Creditar separadamente bibliotecas, frameworks, ícones, fontes, imagens, ilustrações, datasets, modelos de IA e outros materiais incorporados.
- [ ] Reproduzir o **texto integral das licenças e avisos obrigatórios** dos componentes distribuídos, conforme suas condições, em `LICENSES/`, `THIRD_PARTY_NOTICES` ou outro local apropriado.
- [ ] Preservar avisos de copyright, autoria, modificações, patentes e atribuições exigidos por cada licença, incluindo arquivos `NOTICE` quando aplicável.
- [ ] Diferenciar créditos de cortesia de obrigações jurídicas: links e menções na página de Créditos não substituem os textos de licenças e avisos obrigatórios.
- [ ] Verificar compatibilidade de licenças e cumprir obrigações específicas de redistribuição, disponibilização de código-fonte e copyleft quando aplicáveis.
- [ ] Incluir informações de licenças e atribuições em artefatos distribuídos quando exigidas, sem depender exclusivamente de uma página hospedada no GitHub.
- [ ] Registrar componentes de licença desconhecida ou ambígua e impedir sua redistribuição até esclarecer os direitos pertinentes.
- [ ] Não presumir que ferramentas SaaS, APIs comerciais ou dependências de build tenham licença open source ou exijam republicação de termos proprietários.
- [ ] Automatizar inventários e conferência de licenças com SBOM, SPDX, REUSE ou ferramentas equivalentes, mantendo revisão humana das obrigações.
- [ ] Atualizar os créditos e o conjunto de licenças em alterações de dependências, assets, versões ou licenciamento.
- [ ] Revisar links, nomes, créditos e licenças antes de cada release, especialmente para pacotes ou imagens distribuídos.
- [ ] Incluir política para solicitar correções, retirada de atribuições indevidas ou reconhecimento de autoria omitida.
- [ ] Evitar apresentar terceiros como patrocinadores, parceiros ou endossantes sem autorização.

## 4. Segurança e cadeia de suprimentos

**Referência:** [Open Source Guides](https://opensource.guide/security-best-practices-for-your-project/).

- [ ] Exigir autenticação multifator nas contas privilegiadas.
- [ ] Aplicar o princípio do menor privilégio a pessoas e automações.
- [ ] Proteger a branch principal contra alterações indevidas.
- [ ] Configurar revisões e verificações obrigatórias antes do merge, quando aplicável.
- [ ] Incorporar análise estática de segurança (SAST) ao desenvolvimento.
- [ ] Ativar detecção de segredos e credenciais nos repositórios.
- [ ] Impedir o versionamento de tokens, senhas, chaves privadas e dados sensíveis.
- [ ] Monitorar vulnerabilidades nas dependências.
- [ ] Avaliar atualização automatizada de dependências com Dependabot ou Renovate.
- [ ] Verificar a procedência e o licenciamento das dependências.
- [ ] Gerar SBOM para artefatos distribuídos, quando aplicável.
- [ ] Publicar ou revisar SECURITY.md.
- [ ] Estabelecer canal privado para comunicação de vulnerabilidades.
- [ ] Avaliar Private Vulnerability Reporting do GitHub.
- [ ] Documentar modelo de ameaças e limites de confiança.
- [ ] Definir procedimento de resposta a incidentes.
- [ ] Definir responsáveis pela triagem, correção e comunicação de vulnerabilidades.
- [ ] Estabelecer critérios para publicação de avisos e correções de segurança.
- [ ] Revisar periodicamente acessos administrativos e permissões.

## 5. Comunidade e colaboração

**Referências:** [guia 1](https://opensource.guide/building-community/) · [guia 2](https://opensource.guide/code-of-conduct/).

- [ ] Publicar um código de conduta.
- [ ] Definir o alcance do código de conduta, inclusive nos canais comunitários.
- [ ] Disponibilizar canal de relato de violações de conduta.
- [ ] Prever alternativa de relato quando a pessoa responsável estiver envolvida.
- [ ] Definir procedimento de apuração, resposta e medidas possíveis.
- [ ] Marcar tarefas apropriadas com good first issue.
- [ ] Marcar tarefas apropriadas com help wanted.
- [ ] Reconhecer contribuições em código, documentação, pesquisa, tradução e revisão.
- [ ] Responder a dúvidas e propostas com respeito e clareza.
- [ ] Justificar recusas de contribuições de forma proporcional.
- [ ] Registrar decisões públicas sempre que não envolverem conteúdo confidencial.
- [ ] Reduzir barreiras desnecessárias à participação.
- [ ] Definir canais distintos para suporte, propostas e discussões.
- [ ] Informar expectativas realistas de tempo de resposta.
- [ ] Atribuir corretamente a autoria e o trabalho dos colaboradores.

## 6. Governança, liderança e transparência

**Referência:** [Open Source Guides](https://opensource.guide/leadership-and-governance/).

- [ ] Documentar papéis de contribuidores, mantenedores e administradores.
- [ ] Definir quem pode revisar e aprovar alterações.
- [ ] Definir critérios para admissão de novos mantenedores.
- [ ] Estabelecer regras de concessão e revogação de acesso.
- [ ] Explicar como decisões importantes são tomadas.
- [ ] Criar procedimento de resolução de divergências.
- [ ] Definir como documentos de governança podem ser alterados.
- [ ] Distribuir responsabilidades e registrar seus limites.
- [ ] Registrar decisões institucionais e suas justificativas.
- [ ] Prever continuidade caso pessoas fundadoras se afastem.
- [ ] Evitar concentração desnecessária de autoridade e credenciais.
- [ ] Manter processos de decisão transparentes, proporcionais ao tamanho da comunidade.

## 7. Financiamento e sustentabilidade

**Referências:** [guia 1](https://opensource.guide/getting-paid/) · [guia 2](https://opensource.guide/maintaining-balance-for-open-source-maintainers/).

- [ ] Estimar custos de infraestrutura, manutenção e operação.
- [ ] Identificar fontes possíveis e legítimas de financiamento.
- [ ] Confirmar habilitação e funcionamento efetivo do GitHub Sponsors.
- [ ] Definir política pública de doações, patrocínios e outros apoios.
- [ ] Explicar destinação e prestação de contas dos recursos recebidos.
- [ ] Evitar prometer contrapartidas incompatíveis com a capacidade operacional.
- [ ] Documentar e administrar potenciais conflitos de interesses.
- [ ] Definir critérios para aceitar ou recusar patrocinadores.
- [ ] Planejar continuidade operacional e manutenção de longo prazo.
- [ ] Distribuir responsabilidades e conhecimento técnico.
- [ ] Estabelecer limites saudáveis para trabalho voluntário.
- [ ] Não anunciar suporte, garantias ou prazos inviáveis.
- [ ] Preparar procedimentos para períodos de inatividade.
- [ ] Formar novos mantenedores e diminuir dependência de uma única pessoa.

## 8. Acessibilidade

**Referência:** [Open Source Guides](https://opensource.guide/accessibility-best-practices-for-your-project/).

- [ ] Publicar política ou declaração de acessibilidade (por exemplo, ACCESSIBILITY.md).
- [ ] Definir metas de conformidade (por exemplo, WCAG nível AA).
- [ ] Garantir navegação completa por teclado.
- [ ] Utilizar HTML semântico nas interfaces.
- [ ] Incluir textos alternativos adequados nas imagens.
- [ ] Disponibilizar legendas e transcrições para conteúdos audiovisuais.
- [ ] Verificar contraste entre texto, interface e fundo.
- [ ] Respeitar preferência por movimento reduzido.
- [ ] Fornecer rótulos claros para controles e formulários.
- [ ] Não depender exclusivamente da cor para transmitir informação.
- [ ] Testar com tecnologias assistivas, incluindo leitores de tela.
- [ ] Validar zoom, reflow e layouts para dispositivos móveis.
- [ ] Automatizar testes de acessibilidade como complemento aos testes manuais.
- [ ] Permitir reporte específico de problemas de acessibilidade.
- [ ] Incluir acessibilidade nos critérios de revisão de alterações.
- [ ] Convidar pessoas com deficiência a avaliar a usabilidade.
- [ ] Em ferramentas CLI, oferecer ajuda clara, códigos de saída consistentes e saídas acessíveis.

## 9. Divulgação, usuários e métricas

**Referências:** [guia 1](https://opensource.guide/finding-users/) · [guia 2](https://opensource.guide/metrics/).

- [ ] Preparar uma apresentação curta e compreensível da iniciativa.
- [ ] Explicar os diferenciais em relação a iniciativas semelhantes.
- [ ] Manter um local central com informações e documentação.
- [ ] Disponibilizar exemplos reais e verificáveis quando existirem.
- [ ] Participar de comunidades pertinentes sem divulgação invasiva.
- [ ] Cooperar com projetos e organizações de objetivos compatíveis.
- [ ] Pesquisar necessidades reais de usuários e contribuidores.
- [ ] Solicitar feedback sobre documentos, produtos e fluxos.
- [ ] Acompanhar visualizações e acesso aos repositórios de forma proporcional.
- [ ] Monitorar stars, forks e clones sem confundi-los com impacto social.
- [ ] Medir participação, contribuições e retenção de colaboradores.
- [ ] Acompanhar tempo de resposta a issues e pull requests.
- [ ] Observar a saúde e sustentabilidade da comunidade.
- [ ] Usar métricas para melhorar prioridades, não para mascarar resultados.
- [ ] Evitar rastreamento invasivo e coleta desnecessária de dados de usuários.

## 10. Integridade de dados, conteúdo e uso responsável de IA

Controles adicionais para projetos que coletam dados, publicam relatórios, investigam fatos, recebem relatos, geram análises ou usam inteligência artificial. Não são requisitos universais nem exigências textuais do Open Source Guides.

- [ ] Distinguir fato documentado, indício, hipótese, interpretação e conclusão.
- [ ] Registrar proveniência, integridade e cadeia de tratamento dos registros.
- [ ] Publicar critérios de seleção e avaliação de fontes.
- [ ] Definir procedimentos de retificação e direito de resposta.
- [ ] Documentar proteção de usuários, fontes, informantes e outros participantes sensíveis.
- [ ] Definir níveis de acesso e tratamento de registros restritos.
- [ ] Garantir rastreabilidade das etapas investigativas e das alterações.
- [ ] Documentar métodos estatísticos, algoritmos, parâmetros e limitações.
- [ ] Exigir revisão humana antes de conclusões sensíveis ou afirmações com impacto relevante sobre pessoas ou organizações.
- [ ] Estabelecer política de uso responsável de inteligência artificial.
- [ ] Definir processo de correção de publicações e preservação do histórico.
- [ ] Estabelecer salvaguardas contra conflitos de interesse e interferências indevidas.
- [ ] Definir retenção, preservação, acesso e eliminação legalmente exigida de dados.
- [ ] Diferenciar explicitamente funcionalidades previstas, em desenvolvimento e operacionais.
- [ ] Publicar metodologia, limitações, incertezas e fontes de cada indicador.
- [ ] Documentar critérios de aceitação, recusa e transparência dos financiadores.

## 11. Conformidade técnica automatizada

Checklist complementar para configurar e verificar qualidade de código, segurança, testes, supply chain, automação e governança técnica de repositórios em geral. As ferramentas citadas são referências para avaliação e podem ser substituídas por soluções equivalentes. Nem todas se aplicam a todos os projetos.

Um item só deverá ser marcado como concluído quando houver evidência de configuração e funcionamento, como arquivo versionado, comando reproduzível, workflow, relatório ou referência de execução. Instalação isolada não demonstra conformidade. Itens não aplicáveis deverão ser justificados. Controles obrigatórios não devem ser dispensados apenas para obter aprovação de um pull request.

### 11.1. Aplicabilidade e critérios de verificação

- [ ] Classificar requisitos como obrigatórios, recomendados ou não aplicáveis para cada repositório.
- [ ] Diferenciar requisitos de documentação, dados, bibliotecas, aplicações e infraestrutura.
- [ ] Aceitar ferramentas equivalentes quando entregarem garantias comparáveis.
- [ ] Justificar ferramentas com funcionalidades sobrepostas ou redundantes.
- [ ] Exigir evidência verificável para marcar requisitos como atendidos.
- [ ] Registrar exceções, justificativas, responsáveis, prazos e medidas compensatórias.
- [ ] Distinguir controles configurados, executados e aprovados.
- [ ] Revisar periodicamente configurações, limites e aplicabilidade.

### 11.2. Identidade, metadados e apresentação no GitHub

- [ ] Definir nome e descrição pública do repositório.
- [ ] Configurar os topics e a categoria apropriada do repositório.
- [ ] Configurar o endereço do site ou da documentação quando aplicável.
- [ ] Criar imagem de apresentação e configurar a Social Preview do GitHub.
- [ ] Manter README com propósito, recursos, estágio, limitações e instruções de uso.
- [ ] Padronizar badges relevantes, capitalização, cores e links dos indicadores.
- [ ] Validar se badges de status mostram workflows e informações corretas.
- [ ] Incluir licença apropriada com texto integral e identificador SPDX quando aplicável.
- [ ] Distinguir licenças de código, documentação, dados e imagens.
- [ ] Configurar SECURITY.md, CONTRIBUTING.md e CODE_OF_CONDUCT.md no repositório ou por padrões herdados da organização.
- [ ] Criar ou herdar templates de issues e pull requests.
- [ ] Verificar links, imagens e recursos do README e demais páginas.

### 11.3. CODEOWNERS, branch protection e rulesets

- [ ] Configurar CODEOWNERS com responsáveis por áreas e arquivos críticos.
- [ ] Confirmar que os code owners possuem acesso e permissões adequados.
- [ ] Definir branch principal e política de integração de alterações.
- [ ] Habilitar somente **merge commit** nas configurações do repositório e desabilitar squash merge e rebase merge.
- [ ] Habilitar a exclusão automática da branch de origem após o merge do pull request. Respeitar as proteções das branches que precisam ser mantidas.
- [ ] Definir critérios de revisão e aprovação por outros mantenedores.
- [ ] Exigir revisão de code owners para alterações sensíveis quando necessário.
- [ ] Definir e exigir verificações de qualidade efetivamente executadas.
- [ ] Confirmar que nomes de checks obrigatórios correspondem a jobs reais e estáveis.
- [ ] Impedir merge com checks obrigatórios pendentes, cancelados ou reprovados.
- [ ] Exigir validação da versão atualizada da branch de destino quando adequado.
- [ ] Definir política de conversas não resolvidas e atualizações após revisão.
- [ ] Restringir bypasses com justificativa e rastreabilidade.
- [ ] Proteger arquivos de CI, CODEOWNERS e configurações de segurança contra modificações indevidas.
- [ ] Testar branch protection e quality gate com pull requests de verificação.

**Padrão de rulesets do projeto.** Ativar os quatro rulesets abaixo para a branch padrão e para `main` quando forem distintas. Configurar as regras de PR para permitir somente merge commit.

| Ruleset | Controle exigido | Exceções |
| --- | --- | --- |
| `integrity` | Bloquear force push. | Nenhuma. |
| `keep` | Bloquear a exclusão da branch protegida. | Nenhuma. |
| `quality` | Exigir PR, branch atualizada com a base e aprovação do job agregador `gate` do workflow `ci.yaml`. Vincular o check ao GitHub Actions e confirmar seu nome de exibição. | Nenhuma. |
| `review` | Invalidar aprovações após novos pushes, exigir aprovação do último push por outra pessoa e exigir a resolução das conversas de revisão. | Bypass apenas para responsáveis explicitamente autorizados, com justificativa e registro. A exceção vale somente para `review`. |

Como evidência, conferir as configurações efetivas do repositório, a exclusão automática de uma branch elegível após merge e o bloqueio de um PR com gate pendente ou reprovado, inclusive para quem tem bypass de revisão. [Exemplo de rulesets](https://github.com/Rondoscopio/osint-rondonia/rules)

### 11.4. Ambiente reproduzível, just, Docker e Compose

**Padrão do projeto.** Toda tarefa do projeto roda em contêiner Docker, tanto no desenvolvimento local quanto no CI. No host ou runner ficam apenas os comandos de orquestração, como Docker, Compose e Just.

- [ ] Padronizar comandos para lint, testes, verificação e geração de artefatos.
- [ ] Usar Just para orquestrar comandos Docker, mantendo a lógica de execução e as dependências dentro dos contêineres.
- [ ] Executar em Docker a instalação de dependências, os builds, o lint, os testes, as validações, as auditorias, a geração de artefatos e os serviços do projeto.
- [ ] Usar Docker Compose quando houver ferramentas ou serviços coordenados.
- [ ] Documentar instalação, desenvolvimento, testes e comandos de manutenção.
- [ ] Organizar configurações comuns sem ocultar diferenças entre repositórios.
- [ ] Fixar ou restringir adequadamente versões das ferramentas.
- [ ] Manter lockfiles para dependências nos ecossistemas compatíveis.
- [ ] Evitar dependências implícitas do ambiente local dos desenvolvedores.
- [ ] Executar contêineres com o mínimo de privilégios possível.
- [ ] Restringir rede, credenciais e diretórios graváveis a verificadores que não precisam deles.
- [ ] Permitir executar localmente as verificações relevantes antes de abrir um PR.
- [ ] Assegurar que a CI execute verificações equivalentes às disponíveis localmente.

### 11.5. Lint, formatação, estrutura e duplicação

- [ ] Configurar ESLint ou alternativa equivalente para JavaScript e TypeScript quando aplicável.
- [ ] Avaliar SonarJS para regras de manutenção, complexidade e qualidade.
- [ ] Configurar Prettier ou formatador equivalente quando aplicável.
- [ ] Avaliar Biome como alternativa ou complemento a ESLint e Prettier.
- [ ] Eliminar ou justificar conflitos e redundâncias entre ESLint, Prettier e Biome.
- [ ] Configurar Stylelint ou alternativa equivalente quando houver CSS ou tecnologias compatíveis.
- [ ] Definir convenções de código, estilos, organização e tratamento de exceções.
- [ ] Configurar ast-grep quando houver regras sintáticas ou restrições arquiteturais específicas.
- [ ] Testar regras de ast-grep com exemplos positivos e negativos.
- [ ] Configurar Knip ou ferramenta equivalente para detectar exports, dependências e arquivos não utilizados.
- [ ] Configurar jscpd ou alternativa equivalente para detectar duplicação de código.
- [ ] Definir limites e escopo de detecção de duplicação e falsos positivos.
- [ ] Tratar adequadamente código gerado, arquivos vendorizados e exceções.
- [ ] Bloquear integração quando regras obrigatórias de qualidade falharem.

### 11.6. Testes automatizados com Vitest e fast-check

- [ ] Configurar Vitest ou framework de testes adequado ao ecossistema.
- [ ] Implementar testes unitários para lógica e invariantes relevantes.
- [ ] Implementar testes de integração para componentes e serviços externos.
- [ ] Avaliar fast-check ou equivalente para testes baseados em propriedades.
- [ ] Testar casos extremos, entradas malformadas e estados inesperados.
- [ ] Testar falhas de dependências, exceções e códigos de erro.
- [ ] Definir metas de cobertura proporcionais à criticidade e não apenas ao percentual.
- [ ] Publicar resultados e relatórios de testes na CI quando apropriado.
- [ ] Bloquear merge quando testes obrigatórios falharem.
- [ ] Controlar aleatoriedade e outras fontes de não determinismo.
- [ ] Investigar e corrigir testes intermitentes.
- [ ] Exigir testes de regressão para falhas relevantes corrigidas.

### 11.7. Validação de workflows, Dockerfiles, YAML, shell e Markdown

- [ ] Configurar actionlint para os workflows do GitHub Actions.
- [ ] Configurar zizmor para revisar a segurança dos workflows.
- [ ] Configurar Hadolint quando houver Dockerfiles.
- [ ] Revisar imagens-base, camadas, usuários, permissões e práticas de build.
- [ ] Configurar yamllint para arquivos YAML pertinentes.
- [ ] Configurar ShellCheck para scripts de shell.
- [ ] Configurar shfmt para formatação de scripts de shell.
- [ ] Verificar códigos de saída e tratamento de falhas nos scripts críticos.
- [ ] Configurar Markdownlint ou alternativa equivalente para documentação Markdown.
- [ ] Verificar links e referências documentais.
- [ ] Verificar se documentos gerados estão sincronizados com suas fontes.
- [ ] Bloquear merge quando documentos consolidados estiverem desatualizados.
- [ ] Identificar arquivos gerados e documentar o procedimento de regeneração.

### 11.8. Segredos, SAST, dependências e vulnerabilidades

- [ ] Configurar Gitleaks ou equivalente para detecção de segredos.
- [ ] Executar detecção de segredos na CI e avaliar verificações locais.
- [ ] Definir procedimento de revogação e rotação para credenciais expostas.
- [ ] Revisar exclusões de detecção de segredos e evitar dispensas abrangentes.
- [ ] Configurar OSV-Scanner ou ferramenta equivalente para vulnerabilidades conhecidas.
- [ ] Configurar Trivy para sistemas de arquivos, imagens e configurações quando aplicável.
- [ ] Configurar Semgrep ou outra ferramenta de análise estática de segurança.
- [ ] Avaliar CodeQL nos repositórios e linguagens suportados.
- [ ] Escolher entre CodeQL automático e avançado sem executar modos incompatíveis.
- [ ] Definir severidades e condições que bloqueiam integração ou publicação.
- [ ] Distinguir vulnerabilidades novas das preexistentes sem ignorar risco acumulado.
- [ ] Definir responsáveis, priorização e prazos para tratamento de vulnerabilidades.
- [ ] Registrar e revisar exceções temporárias com justificativa.
- [ ] Evitar que erros das ferramentas sejam tratados como checks aprovados.

### 11.9. Supply chain, pinning, atestações e SBOM

- [ ] Inventariar dependências diretas e transitivas.
- [ ] Revisar origem, manutenção e licenças de dependências críticas.
- [ ] Fixar GitHub Actions de terceiros pelo SHA completo de commit.
- [ ] Documentar a versão correspondente aos SHAs fixados.
- [ ] Atualizar pins de ações externas periodicamente.
- [ ] Avaliar fixação de imagens Docker por digest para etapas críticas.
- [ ] Verificar origem e integridade de ferramentas e artefatos usados no build.
- [ ] Evitar execução de scripts de terceiros sem avaliação de riscos.
- [ ] Impedir exposição de credenciais privilegiadas a contribuições não confiáveis.
- [ ] Aplicar o princípio do menor privilégio ao GITHUB_TOKEN.
- [ ] Preferir credenciais de curta duração e identidade federada quando disponíveis.
- [ ] Evitar persistência desnecessária de credenciais de checkout.
- [ ] Avaliar assinatura e atestações de procedência dos artefatos publicados.
- [ ] Gerar SBOM para os artefatos relevantes.
- [ ] Avaliar CycloneDX como formato de SBOM.
- [ ] Validar completude, formato e integridade do SBOM.
- [ ] Associar cada SBOM à versão ou ao artefato correspondente.
- [ ] Atualizar SBOM quando dependências ou artefatos relevantes forem alterados.
- [ ] Publicar SBOM com releases quando apropriado.
- [ ] Configurar Dependency Review para alterações de dependências em PRs quando disponível.
- [ ] Definir regras para vulnerabilidades e licenças no Dependency Review.
- [ ] Configurar Dependency Submission para ecossistemas que necessitem envio de dependências ao GitHub.
- [ ] Conferir consistência entre SBOM, dependências resolvidas e Dependency Graph.

### 11.10. OpenSSF Scorecard e avaliação contínua

- [ ] Configurar OpenSSF Scorecard ou avaliação comparável.
- [ ] Executar a avaliação de forma periódica.
- [ ] Registrar resultados e sua evolução histórica.
- [ ] Priorizar melhorias a partir dos controles com maior risco ou fragilidade.
- [ ] Avaliar proteção de branches, revisão de código e permissões.
- [ ] Avaliar manutenção de dependências e segurança de workflows.
- [ ] Avaliar procedência e integridade de artefatos distribuídos.
- [ ] Investigar achados relevantes mesmo sem alteração da pontuação geral.
- [ ] Não apresentar Scorecard como certificação de segurança.

### 11.11. Atualização automatizada com Renovate

- [ ] Configurar Renovate ou solução equivalente.
- [ ] Definir regras para atualizações automáticas, semiautomáticas e manuais.
- [ ] Agrupar atualizações compatíveis e limitar volume de PRs.
- [ ] Priorizar atualizações relacionadas a vulnerabilidades.
- [ ] Manter atualizações para dependências, GitHub Actions e imagens de contêiner.
- [ ] Atualizar pins suportados de supply chain.
- [ ] Executar quality gate nos PRs de atualização.
- [ ] Adotar condições restritivas para automerge quando permitido.
- [ ] Monitorar dependências descontinuadas ou sem manutenção.
- [ ] Registrar e revisar exceções de atualização.

### 11.12. Integração contínua, quality gate e publicação

- [ ] Definir o workflow principal com nome `CI` no arquivo `.github/workflows/ci.yaml`. Executá-lo em todos os pull requests, inclusive os que alteram apenas documentação, e em pushes para a branch padrão.
- [ ] Organizar verificações por categoria, linguagem ou matriz quando apropriado.
- [ ] Distinguir checks obrigatórios dos informativos.
- [ ] Criar no `ci.yaml` um job `gate` com nome de exibição estável. Declarar os jobs obrigatórios em `needs` e usar `if: ${{ always() }}` para que o gate avalie seus resultados mesmo quando uma dependência falhar ou for pulada.
- [ ] Limitar o job `gate` a ler e consolidar os resultados em `needs`. Checkout, instalação de ferramentas, builds, lint e testes ficam nos jobs de verificação.
- [ ] Aprovar o gate somente se todos os jobs obrigatórios retornarem `success`. Resultados ausentes, reprovados, cancelados ou pulados não liberam o merge. Um gate ainda pendente também bloqueia o merge.
- [ ] Restringir segredos e permissões de escrita nos workflows.
- [ ] Revisar permissões de ações externas e ambientes de execução.
- [ ] Controlar o cache sem comprometer a integridade dos resultados.
- [ ] Definir limites de tempo e recursos dos jobs.
- [ ] Evitar verificações redundantes de alto custo.
- [ ] Publicar logs e relatórios suficientes para investigar falhas.
- [ ] Definir retenção adequada dos artefatos de CI.
- [ ] Configurar no ruleset o quality gate que efetivamente é executado.
- [ ] Testar bloqueio de merge com falha intencional em branch de teste.
- [ ] Testar o fluxo de integração após aprovação das verificações.

O OSINT Rondônia é a referência para o job agregador. [Workflow CI](https://github.com/Rondoscopio/osint-rondonia/blob/main/.github/workflows/ci.yaml)

### 11.13. Evidências, auditoria e manutenção da conformidade

- [ ] Registrar ferramenta ou controle responsável por cada requisito.
- [ ] Registrar a localização de cada configuração.
- [ ] Registrar workflow, comando ou procedimento de validação.
- [ ] Registrar execução bem-sucedida recente e referência verificável.
- [ ] Distinguir presença de configuração de funcionamento validado.
- [ ] Identificar responsáveis por manter os controles.
- [ ] Justificar itens não aplicáveis.
- [ ] Documentar exceções, riscos aceitos, medidas compensatórias e prazos.
- [ ] Verificar periodicamente badges, relatórios e checks.
- [ ] Reavaliar os controles após mudanças significativas em código, infraestrutura ou governança.
- [ ] Documentar incidentes que revelem insuficiência dos controles.
- [ ] Revisar a checklist conforme a evolução das ferramentas e do projeto.

**Critério de aceite da seção:** evidência verificável de configuração e execução para cada requisito aplicável, com responsáveis, tratamento de exceções e revisão periódica. A presente checklist não equivale a certificação de segurança ou aprovação formal de tecnologia.

## 12. Normas e referenciais de qualidade e conformidade

Esta seção reúne normas e referenciais para eventual aplicação aos projetos do projeto. Os textos abaixo são sínteses de planejamento e não reproduzem os requisitos normativos integrais. Para auditorias e alegações formais de conformidade, consultar a edição oficial, o escopo completo, as cláusulas aplicáveis e as condições de avaliação.

**Interpretação:** algumas referências estabelecem requisitos de sistemas de gestão, outras trazem orientações, métricas, vocabulários ou formatos de relatório. Nem todas admitem certificação. A simples citação de uma norma não significa conformidade do projeto. Requisitos setoriais, como PCI DSS, só se aplicam quando o escopo efetivamente os alcança. Os exemplos de evidência são recomendações operacionais do projeto.

### 12.1. Referências centrais

#### PCI DSS v4.0.1

**Fonte:** [organização responsável](https://www.pcisecuritystandards.org/pt/document_library/).

**O que estabelece ou orienta:** Proteção de ambientes que armazenam, processam ou transmitem dados de titulares de cartões. Seus 12 grupos de requisitos tratam de redes, configurações, dados, criptografia, malware, desenvolvimento seguro, acessos, autenticação, proteção física, registros, testes e políticas.

**Como avaliar a aplicação:** Delimitar o ambiente de dados de cartão e avaliar cada requisito aplicável. Não é exigência geral de todo repositório sem vínculo com pagamentos.

**Evidências sugeridas:** Inventário de fluxos, escopo do ambiente, controles, relatórios de testes e avaliação PCI.

- [ ] Avaliar a aplicabilidade de PCI DSS v4.0.1, registrar os controles escolhidos e comprovar sua execução.

#### ISO 24183:2024

**Fonte:** [organização responsável](https://www.iso.org/standard/78009.html).

**O que estabelece ou orienta:** Vocabulário da comunicação técnica, para padronizar conceitos utilizados na criação e no uso de produtos de informação. Não é norma de métricas de código.

**Como avaliar a aplicação:** Adotar terminologia consistente para manuais, documentação técnica e orientação a colaboradores.

**Evidências sugeridas:** Glossário e revisão de terminologia de documentos.

- [ ] Avaliar a aplicabilidade de ISO 24183:2024, registrar os controles escolhidos e comprovar sua execução.

#### ISO/IEC 25066:2016, retirada

**Fonte:** [organização responsável](https://www.iso.org/standard/63831.html).

**O que estabelece ou orienta:** Formato comum de relatórios de avaliação de usabilidade, com informações sobre métodos, resultados e contexto de avaliação. A edição foi retirada.

**Como avaliar a aplicação:** Utilizar como referência histórica para relatórios e revisar normas vigentes antes de alegar conformidade.

**Evidências sugeridas:** Relatórios de testes de usabilidade, metodologias e resultados.

- [ ] Avaliar a aplicabilidade de ISO/IEC 25066:2016, retirada, registrar os controles escolhidos e comprovar sua execução.

#### ISO/IEC 25010:2023

**Fonte:** [organização responsável](https://www.iso.org/standard/78176.html).

**O que estabelece ou orienta:** Modelo de qualidade de produto SQuaRE com nove características: adequação funcional, desempenho, compatibilidade, capacidade de interação, confiabilidade, segurança, manutenibilidade, flexibilidade e safety, relativa à prevenção de danos.

**Como avaliar a aplicação:** Transformar as características relevantes em requisitos não funcionais, metas mensuráveis e critérios de aceitação.

**Evidências sugeridas:** Matriz de atributos, métricas, testes e resultados por produto.

- [ ] Avaliar a aplicabilidade de ISO/IEC 25010:2023, registrar os controles escolhidos e comprovar sua execução.

#### ISO/IEC 5055:2021

**Fonte:** [organização responsável](https://www.iso.org/standard/80623.html).

**O que estabelece ou orienta:** Medidas automatizadas de qualidade estrutural de código-fonte, a partir de violações de boas práticas capazes de produzir riscos ou custos de manutenção.

**Como avaliar a aplicação:** Avaliar métricas e defeitos estruturais, sem confundir qualquer pontuação de lint com a medida padronizada.

**Evidências sugeridas:** Relatórios de análise estática estrutural e acompanhamento de tendências.

- [ ] Avaliar a aplicabilidade de ISO/IEC 5055:2021, registrar os controles escolhidos e comprovar sua execução.

#### ISO/IEC/IEEE 12207:2026

**Fonte:** [organização responsável](https://www.iso.org/standard/90219.html).

**O que estabelece ou orienta:** Processos de ciclo de vida de software, de aquisição e definição até desenvolvimento, validação, operação, manutenção e retirada. Compatível com métodos ágeis, sem impor metodologia única.

**Como avaliar a aplicação:** Definir etapas, responsabilidades, verificações, produtos de trabalho e manutenção proporcionais ao escopo.

**Evidências sugeridas:** Processo documentado de desenvolvimento, registros de mudanças e entregas.

- [ ] Avaliar a aplicabilidade de ISO/IEC/IEEE 12207:2026, registrar os controles escolhidos e comprovar sua execução.

#### ISO/IEC 20000-1:2018

**Fonte:** [organização responsável](https://www.iso.org/standard/70636.html).

**O que estabelece ou orienta:** Requisitos de sistema de gestão de serviços de TI, incluindo planejamento, desenho, transição, entrega, avaliação e melhoria.

**Como avaliar a aplicação:** Aplicar aos projetos que operam serviços com disponibilidade, incidentes, mudanças, continuidade e fornecedores.

**Evidências sugeridas:** Catálogo de serviços, objetivos de nível de serviço e registros operacionais.

- [ ] Avaliar a aplicabilidade de ISO/IEC 20000-1:2018, registrar os controles escolhidos e comprovar sua execução.

#### ISO 9001:2026

**Fonte:** [organização responsável](https://www.iso.org/standard/9001).

**O que estabelece ou orienta:** Requisitos para sistema de gestão da qualidade com liderança, contexto, planejamento, recursos, operação, medição, auditoria e melhoria. A edição 2026 substitui a de 2015.

**Como avaliar a aplicação:** Estabelecer objetivos, processos, responsáveis, indicadores e ações corretivas no nível institucional adequado.

**Evidências sugeridas:** Política de qualidade, indicadores, revisões e evidências de melhoria.

- [ ] Avaliar a aplicabilidade de ISO 9001:2026, registrar os controles escolhidos e comprovar sua execução.

#### ISO/IEC/IEEE 90003:2018

**Fonte:** [organização responsável](https://www.iso.org/standard/74348.html).

**O que estabelece ou orienta:** Orientações para interpretar e aplicar ISO 9001 à aquisição, desenvolvimento, operação e manutenção de software. Não cria requisitos adicionais à ISO 9001.

**Como avaliar a aplicação:** Adaptar práticas de qualidade a projetos, requisitos, testes, configuração e suporte.

**Evidências sugeridas:** Rastreabilidade das práticas de engenharia ao sistema de gestão.

- [ ] Avaliar a aplicabilidade de ISO/IEC/IEEE 90003:2018, registrar os controles escolhidos e comprovar sua execução.

#### ISO/IEC/IEEE 29148:2018

**Fonte:** [organização responsável](https://www.iso.org/standard/72089.html).

**O que estabelece ou orienta:** Engenharia de requisitos: necessidades de interessados, elicitação, análise, especificação, validação, gerenciamento e rastreabilidade.

**Como avaliar a aplicação:** Documentar requisitos claros, completos, consistentes e verificáveis, com justificativas e critérios de aceite.

**Evidências sugeridas:** Especificações, histórias, critérios de aceite e histórico de mudanças.

- [ ] Avaliar a aplicabilidade de ISO/IEC/IEEE 29148:2018, registrar os controles escolhidos e comprovar sua execução.

#### ISO/IEC/IEEE 42010:2022

**Fonte:** [organização responsável](https://www.iso.org/standard/74393.html).

**O que estabelece ou orienta:** Requisitos para descrições de arquitetura, ligando interessados, preocupações, pontos de vista, visões, modelos e justificativas. Não prescreve arquitetura específica.

**Como avaliar a aplicação:** Registrar decisões, restrições, alternativas, integrações e visões de segurança, dados e implantação.

**Evidências sugeridas:** Descrição arquitetural, diagramas, ADRs e trade-offs.

- [ ] Avaliar a aplicabilidade de ISO/IEC/IEEE 42010:2022, registrar os controles escolhidos e comprovar sua execução.

#### Série ISO/IEC/IEEE 29119

**Fonte:** [organização responsável](https://www.iso.org/standard/81291.html).

**O que estabelece ou orienta:** Família de normas sobre conceitos, processos, documentação e técnicas de testes. A parte 1:2022 descreve os conceitos gerais.

**Como avaliar a aplicação:** Definir estratégia e planos de testes, objetivos, desenho, execução, registros de resultados e tratamento de falhas.

**Evidências sugeridas:** Planos, casos, resultados e testes automatizados rastreáveis.

- [ ] Avaliar a aplicabilidade de Série ISO/IEC/IEEE 29119, registrar os controles escolhidos e comprovar sua execução.

#### ISO/IEC 38500:2024

**Fonte:** [organização responsável](https://www.iso.org/standard/81684.html).

**O que estabelece ou orienta:** Princípios de governança de TI, para que a direção avalie, direcione e monitore tecnologia, responsabilidades, riscos e desempenho.

**Como avaliar a aplicação:** Definir autoridades, critérios de decisão, prestação de contas e avaliação da tecnologia.

**Evidências sugeridas:** Registros de decisões, papéis, políticas e indicadores.

- [ ] Avaliar a aplicabilidade de ISO/IEC 38500:2024, registrar os controles escolhidos e comprovar sua execução.

#### ISO/IEC 42001:2023

**Fonte:** [organização responsável](https://www.iso.org/standard/42001).

**O que estabelece ou orienta:** Requisitos para sistema de gestão de IA, contemplando políticas, papéis, riscos, impactos, controles, avaliação e melhoria.

**Como avaliar a aplicação:** Governar aquisição e uso de modelos, análise de vieses, supervisão humana, privacidade e monitoramento.

**Evidências sugeridas:** Política de IA, inventário de modelos, avaliações de impacto e relatórios.

- [ ] Avaliar a aplicabilidade de ISO/IEC 42001:2023, registrar os controles escolhidos e comprovar sua execução.

#### ISO/IEC 27001:2022

**Fonte:** [organização responsável](https://www.iso.org/standard/27001).

**O que estabelece ou orienta:** Requisitos para sistema de gestão de segurança da informação, com análise de riscos, tratamento, controles, auditoria e melhoria.

**Como avaliar a aplicação:** Definir escopo do SGSI, riscos, seleção e justificativa de controles e revisões periódicas.

**Evidências sugeridas:** Inventário, avaliação de risco, declaração de aplicabilidade e auditorias.

- [ ] Avaliar a aplicabilidade de ISO/IEC 27001:2022, registrar os controles escolhidos e comprovar sua execução.

#### ISO/IEC 27002:2022

**Fonte:** [organização responsável](https://www.iso.org/standard/75652.html).

**O que estabelece ou orienta:** Orientações de controles organizacionais, de pessoas, físicos e tecnológicos para segurança da informação. Complementa ISO/IEC 27001.

**Como avaliar a aplicação:** Selecionar controles de acesso, criptografia, backups, registros, fornecedores, desenvolvimento e incidentes.

**Evidências sugeridas:** Políticas, configurações de controles, logs, evidências de testes e revisão.

- [ ] Avaliar a aplicabilidade de ISO/IEC 27002:2022, registrar os controles escolhidos e comprovar sua execução.

#### ISO/IEC 27701:2025

**Fonte:** [organização responsável](https://www.iso.org/standard/27701).

**O que estabelece ou orienta:** Requisitos e orientações para sistema de gestão de privacidade de dados pessoais. A edição de 2025 pode ser aplicada independentemente, embora seja compatível com ISO/IEC 27001.

**Como avaliar a aplicação:** Inventariar tratamentos, finalidades, responsabilidades, direitos dos titulares, riscos e retenção.

**Evidências sugeridas:** Registro de operações, bases legais avaliadas, direitos dos titulares e avaliações de impacto.

- [ ] Avaliar a aplicabilidade de ISO/IEC 27701:2025, registrar os controles escolhidos e comprovar sua execução.

#### ISO/IEC 26585, projeto em desenvolvimento

**Fonte:** [organização responsável](https://www.iso.org/standard/93532.html).

**O que estabelece ou orienta:** Projeto de framework para desenvolvimento seguro de software. A referência consultada consta em estágio pré-publicação, sem assumir requisitos definitivos.

**Como avaliar a aplicação:** Monitorar a edição publicada e avaliar práticas de desenvolvimento seguro sem declarar conformidade ao projeto.

**Evidências sugeridas:** Registros de revisão de código, ameaças, vulnerabilidades e ciclo de vida seguro.

- [ ] Avaliar a aplicabilidade de ISO/IEC 26585, projeto em desenvolvimento, registrar os controles escolhidos e comprovar sua execução.

#### ISO/IEC 27017:2025

**Fonte:** [organização responsável](https://www.iso.org/standard/82878.html).

**O que estabelece ou orienta:** Orientações de controles de segurança específicos de serviços de nuvem para fornecedores e clientes.

**Como avaliar a aplicação:** Delimitar responsabilidade compartilhada, identidades, configurações, monitoramento e fornecedores.

**Evidências sugeridas:** Matriz de responsabilidades, contratos, controles e evidências de configuração.

- [ ] Avaliar a aplicabilidade de ISO/IEC 27017:2025, registrar os controles escolhidos e comprovar sua execução.

#### ISO/IEC 27018:2025

**Fonte:** [organização responsável](https://www.iso.org/standard/27018).

**O que estabelece ou orienta:** Orientações para proteção de dados pessoais em nuvens públicas quando o provedor atua como operador desses dados.

**Como avaliar a aplicação:** Verificar tratamento, acesso, subcontratados, transparência, retenção e eliminação no provedor.

**Evidências sugeridas:** Contratos, avaliação de provedores e inventário de fluxos de dados.

- [ ] Avaliar a aplicabilidade de ISO/IEC 27018:2025, registrar os controles escolhidos e comprovar sua execução.

#### ISO/IEC 33001:2015

**Fonte:** [organização responsável](https://www.iso.org/standard/54175.html).

**O que estabelece ou orienta:** Conceitos e terminologia para avaliação de capacidade de processos e estrutura da família ISO/IEC 330xx.

**Como avaliar a aplicação:** Definir critérios para avaliar práticas pela sua execução e resultados, não apenas pela existência de documentos.

**Evidências sugeridas:** Modelo de avaliação, escopo, indicadores e registros de auditoria.

- [ ] Avaliar a aplicabilidade de ISO/IEC 33001:2015, registrar os controles escolhidos e comprovar sua execução.

#### ISO/IEC 33020:2019

**Fonte:** [organização responsável](https://www.iso.org/standard/54176.html).

**O que estabelece ou orienta:** Modelo de medição da capacidade de processos dentro da família ISO/IEC 330xx.

**Como avaliar a aplicação:** Aplicar avaliação de atributos e capacidade de processos, caso seja adotado programa formal.

**Evidências sugeridas:** Evidências de atributos, resultados e plano de melhoria.

- [ ] Avaliar a aplicabilidade de ISO/IEC 33020:2019, registrar os controles escolhidos e comprovar sua execução.

#### Série ISO/IEC 15504, SPICE, histórica

**Fonte:** [organização responsável](https://www.iso.org/standard/38932.html).

**O que estabelece ou orienta:** Antecessora histórica dos modelos ISO/IEC 330xx de avaliação de processos. Diversas partes foram substituídas.

**Como avaliar a aplicação:** Usar como contexto histórico, preferindo as referências ISO/IEC 330xx atuais.

**Evidências sugeridas:** Registro das equivalências e dos modelos adotados.

- [ ] Avaliar a aplicabilidade de Série ISO/IEC 15504, SPICE, histórica, registrar os controles escolhidos e comprovar sua execução.

### 12.2. Referências complementares do guia de engenharia de software

As referências complementares ampliam o catálogo sem transformar toda a coleção em obrigação automática. As páginas específicas verificadas apontam para o catálogo ISO. Quando a edição ou a ficha não foi confirmada, o link é apenas o catálogo geral, e o status deve ser apurado antes de qualquer declaração formal.

#### Usabilidade, experiência e comunicação

**[ISO 9241-11:2018](https://www.iso.org/standard/63500.html).** Eficácia, eficiência e satisfação no contexto de uso, avaliadas com tarefas de usuários. **Evidência prática para avaliação:** definir requisitos e registros pertinentes ao escopo, como documentação, métricas, testes, controles e decisões de implementação.

**[ISO 9241-110:2020](https://www.iso.org/standard/75258.html).** Princípios de interação como autoclaridade, controle, capacidade de aprendizagem e tolerância a erros. **Evidência prática para avaliação:** definir requisitos e registros pertinentes ao escopo, como documentação, métricas, testes, controles e decisões de implementação.

**[ISO 9241-171:2025](https://www.iso.org/standard/86308.html).** Orientações de acessibilidade de software, incluindo tecnologias assistivas e barreiras de interação. **Evidência prática para avaliação:** definir requisitos e registros pertinentes ao escopo, como documentação, métricas, testes, controles e decisões de implementação.

**[ISO 9241-210:2019](https://www.iso.org/standard/77520.html).** Processo centrado no usuário, com contexto, necessidades, soluções e avaliação iterativa. **Evidência prática para avaliação:** definir requisitos e registros pertinentes ao escopo, como documentação, métricas, testes, controles e decisões de implementação.

**[ISO 9241-220:2019](https://www.iso.org/standard/63462.html).** Processos organizacionais para tornar pesquisa e projeto centrado nas pessoas consistentes e avaliáveis. **Evidência prática para avaliação:** definir requisitos e registros pertinentes ao escopo, como documentação, métricas, testes, controles e decisões de implementação.

**[ISO/TR 16982:2002](https://www.iso.org/standard/31176.html).** Métodos de investigação e avaliação de usabilidade, referência técnica de apoio. **Evidência prática para avaliação:** definir requisitos e registros pertinentes ao escopo, como documentação, métricas, testes, controles e decisões de implementação.

#### Qualidade de dados, métricas e avaliação

**[Série ISO/IEC 25000](https://www.iso.org/standards.html).** Organização SQuaRE de requisitos, modelos, medições e avaliação de qualidade de sistemas e software. **Evidência prática para avaliação:** definir requisitos e registros pertinentes ao escopo, como documentação, métricas, testes, controles e decisões de implementação.

**[ISO/IEC 25012:2008](https://www.iso.org/standard/35736.html).** Modelo de qualidade de dados, com exatidão, completude, consistência, atualidade e rastreabilidade. **Evidência prática para avaliação:** definir requisitos e registros pertinentes ao escopo, como documentação, métricas, testes, controles e decisões de implementação.

**[ISO/IEC 25022:2016](https://www.iso.org/standard/35746.html).** Medição da qualidade em uso em condições e tarefas reais. **Evidência prática para avaliação:** definir requisitos e registros pertinentes ao escopo, como documentação, métricas, testes, controles e decisões de implementação.

**[ISO/IEC 25023:2016](https://www.iso.org/standard/35747.html).** Medidas de qualidade de produto vinculadas a atributos e metas verificáveis. **Evidência prática para avaliação:** definir requisitos e registros pertinentes ao escopo, como documentação, métricas, testes, controles e decisões de implementação.

**[ISO/IEC 25024:2015](https://www.iso.org/standard/35749.html).** Medidas de qualidade de dados, úteis em importações, transformações e bases analíticas. **Evidência prática para avaliação:** definir requisitos e registros pertinentes ao escopo, como documentação, métricas, testes, controles e decisões de implementação.

**[ISO/IEC 25040:2011](https://www.iso.org/standard/35765.html).** Processo estruturado de planejamento, execução e comunicação da avaliação de qualidade. **Evidência prática para avaliação:** definir requisitos e registros pertinentes ao escopo, como documentação, métricas, testes, controles e decisões de implementação.

**[ISO/IEC 25041:2012](https://www.iso.org/standard/35766.html).** Orientações para avaliar software por desenvolvedores, compradores e avaliadores independentes. **Evidência prática para avaliação:** definir requisitos e registros pertinentes ao escopo, como documentação, métricas, testes, controles e decisões de implementação.

**[ISO/IEC 25045:2010](https://www.iso.org/standard/35770.html).** Avaliação da capacidade de recuperação de software e sistemas. **Evidência prática para avaliação:** definir requisitos e registros pertinentes ao escopo, como documentação, métricas, testes, controles e decisões de implementação.

**[ISO/IEC 25051:2014](https://www.iso.org/standard/61580.html).** Qualidade e testes de produtos prontos para uso, como softwares de terceiros. **Evidência prática para avaliação:** definir requisitos e registros pertinentes ao escopo, como documentação, métricas, testes, controles e decisões de implementação.

#### Ciclo de vida, documentação, engenharia e modelagem

**[ISO/IEC/IEEE 15288:2023](https://www.iso.org/standard/81702.html).** Processos do ciclo de vida de sistemas completos, incluindo software, pessoas, hardware e instalações. **Evidência prática para avaliação:** definir requisitos e registros pertinentes ao escopo, como documentação, métricas, testes, controles e decisões de implementação.

**[ISO/IEC/IEEE 15289:2019](https://www.iso.org/standard/71950.html).** Finalidade e conteúdo de documentos e registros produzidos no ciclo de vida. **Evidência prática para avaliação:** definir requisitos e registros pertinentes ao escopo, como documentação, métricas, testes, controles e decisões de implementação.

**[ISO/IEC/IEEE 24748-1:2024](https://www.iso.org/standard/84709.html).** Diretrizes para definir e adaptar modelos de ciclo de vida, complementando 12207 e 15288. **Evidência prática para avaliação:** definir requisitos e registros pertinentes ao escopo, como documentação, métricas, testes, controles e decisões de implementação.

**[ISO/IEC/IEEE 14764:2022](https://www.iso.org/standard/80710.html).** Manutenção corretiva, adaptativa, perfectiva e preventiva. **Evidência prática para avaliação:** definir requisitos e registros pertinentes ao escopo, como documentação, métricas, testes, controles e decisões de implementação.

**[ISO/IEC/IEEE 15939:2017](https://www.iso.org/standard/71197.html).** Processos para definir medidas a partir de perguntas e necessidades de informação. **Evidência prática para avaliação:** definir requisitos e registros pertinentes ao escopo, como documentação, métricas, testes, controles e decisões de implementação.

**[ISO/IEC/IEEE 24765:2017](https://www.iso.org/standard/71952.html).** Vocabulário padronizado de engenharia de software e sistemas. **Evidência prática para avaliação:** definir requisitos e registros pertinentes ao escopo, como documentação, métricas, testes, controles e decisões de implementação.

**[Série ISO/IEC 29110](https://www.iso.org/standards.html).** Perfis e orientações de ciclo de vida para equipes e entidades muito pequenas. **Evidência prática para avaliação:** definir requisitos e registros pertinentes ao escopo, como documentação, métricas, testes, controles e decisões de implementação.

**[Série ISO/IEC 19505, UML](https://www.iso.org/standard/32624.html).** Linguagem padronizada de modelagem de estrutura e comportamento de sistemas de software. **Evidência prática para avaliação:** definir requisitos e registros pertinentes ao escopo, como documentação, métricas, testes, controles e decisões de implementação.

**[ISO/IEC 19514:2017, SysML](https://www.iso.org/standard/65231.html).** Linguagem de modelagem de sistemas, com próxima geração ainda em desenvolvimento. **Evidência prática para avaliação:** definir requisitos e registros pertinentes ao escopo, como documentação, métricas, testes, controles e decisões de implementação.

**[ISO/IEC 19510, BPMN](https://www.iso.org/standards.html).** Notação padronizada de processos de negócio e fluxos de trabalho. **Evidência prática para avaliação:** definir requisitos e registros pertinentes ao escopo, como documentação, métricas, testes, controles e decisões de implementação.

**[ISO/IEC 15910, verificar edição](https://www.iso.org/standards.html).** Documentação voltada ao usuário, citada no material fornecido e pendente de verificação de status. **Evidência prática para avaliação:** definir requisitos e registros pertinentes ao escopo, como documentação, métricas, testes, controles e decisões de implementação.

#### Segurança, riscos, nuvem e gestão de terceiros

**[ISO/IEC 27000:2018](https://www.iso.org/standard/73906.html).** Vocabulário e visão geral de sistemas de gestão de segurança da informação. **Evidência prática para avaliação:** definir requisitos e registros pertinentes ao escopo, como documentação, métricas, testes, controles e decisões de implementação.

**[ISO/IEC 27005:2022](https://www.iso.org/standard/80585.html).** Avaliação e tratamento de riscos de segurança da informação. **Evidência prática para avaliação:** definir requisitos e registros pertinentes ao escopo, como documentação, métricas, testes, controles e decisões de implementação.

**[Série ISO/IEC 27034](https://www.iso.org/standard/44378.html).** Práticas de segurança de aplicações ao longo de seu ciclo de vida. **Evidência prática para avaliação:** definir requisitos e registros pertinentes ao escopo, como documentação, métricas, testes, controles e decisões de implementação.

**[Série ISO/IEC 27035](https://www.iso.org/standards.html).** Preparação, identificação, resposta e melhoria da gestão de incidentes de segurança. **Evidência prática para avaliação:** definir requisitos e registros pertinentes ao escopo, como documentação, métricas, testes, controles e decisões de implementação.

**[Série ISO/IEC 27036](https://www.iso.org/standards.html).** Segurança da informação em relações com fornecedores e prestadores. **Evidência prática para avaliação:** definir requisitos e registros pertinentes ao escopo, como documentação, métricas, testes, controles e decisões de implementação.

**[Série ISO/IEC 15408, Common Criteria](https://www.iso.org/standards.html).** Avaliação de requisitos e garantias de segurança em produtos de tecnologia. **Evidência prática para avaliação:** definir requisitos e registros pertinentes ao escopo, como documentação, métricas, testes, controles e decisões de implementação.

**[ISO/IEC 27400](https://www.iso.org/standards.html).** Recomendações de cibersegurança e privacidade em ecossistemas IoT. **Evidência prática para avaliação:** definir requisitos e registros pertinentes ao escopo, como documentação, métricas, testes, controles e decisões de implementação.

**[ISO 31000:2018](https://www.iso.org/standard/65694.html).** Princípios e orientações de gestão geral de riscos. **Evidência prática para avaliação:** definir requisitos e registros pertinentes ao escopo, como documentação, métricas, testes, controles e decisões de implementação.

**[ISO/IEC 17788:2014, histórica](https://www.iso.org/standard/60544.html).** Vocabulário anterior de nuvem, sucedido por referências da família 22123. **Evidência prática para avaliação:** definir requisitos e registros pertinentes ao escopo, como documentação, métricas, testes, controles e decisões de implementação.

**[ISO/IEC 17789:2014, histórica](https://www.iso.org/standard/60545.html).** Arquitetura de referência de nuvem anterior à família 22123. **Evidência prática para avaliação:** definir requisitos e registros pertinentes ao escopo, como documentação, métricas, testes, controles e decisões de implementação.

**[Série ISO/IEC 22123:2023](https://www.iso.org/standard/82757.html).** Vocabulário, conceitos e arquitetura de referência para serviços de nuvem. **Evidência prática para avaliação:** definir requisitos e registros pertinentes ao escopo, como documentação, métricas, testes, controles e decisões de implementação.

**[Série ISO/IEC 19770](https://www.iso.org/standards.html).** Inventário e gestão de ativos, instalações e licenciamento de software. **Evidência prática para avaliação:** definir requisitos e registros pertinentes ao escopo, como documentação, métricas, testes, controles e decisões de implementação.

#### Inteligência artificial e governança de dados

**[ISO/IEC 22989:2022](https://www.iso.org/standard/74296.html).** Terminologia básica e conceitos de inteligência artificial. **Evidência prática para avaliação:** definir requisitos e registros pertinentes ao escopo, como documentação, métricas, testes, controles e decisões de implementação.

**[ISO/IEC 23053:2022](https://www.iso.org/standard/74438.html).** Framework conceitual para componentes e fases de sistemas que usam aprendizado de máquina. **Evidência prática para avaliação:** definir requisitos e registros pertinentes ao escopo, como documentação, métricas, testes, controles e decisões de implementação.

**[ISO/IEC 23894:2023](https://www.iso.org/standard/77304.html).** Gestão de riscos de IA, inclusive vieses, privacidade, robustez e impacto. **Evidência prática para avaliação:** definir requisitos e registros pertinentes ao escopo, como documentação, métricas, testes, controles e decisões de implementação.

**[ISO/IEC 5338](https://www.iso.org/standards.html).** Processos de ciclo de vida de sistemas de inteligência artificial. **Evidência prática para avaliação:** definir requisitos e registros pertinentes ao escopo, como documentação, métricas, testes, controles e decisões de implementação.

**[ISO/IEC 42005:2025](https://www.iso.org/standards.html).** Diretrizes para avaliação de impactos de sistemas de IA sobre pessoas e direitos. **Evidência prática para avaliação:** definir requisitos e registros pertinentes ao escopo, como documentação, métricas, testes, controles e decisões de implementação.

**[Série ISO/IEC 5259](https://www.iso.org/standards.html).** Qualidade de dados utilizados em analytics e aprendizado de máquina. **Evidência prática para avaliação:** definir requisitos e registros pertinentes ao escopo, como documentação, métricas, testes, controles e decisões de implementação.

**[ISO/IEC 38507](https://www.iso.org/standards.html).** Governança organizacional e responsabilidades sobre o uso de IA. **Evidência prática para avaliação:** definir requisitos e registros pertinentes ao escopo, como documentação, métricas, testes, controles e decisões de implementação.

**[Série ISO 8000](https://www.iso.org/standards.html).** Qualidade de dados e de dados mestres. **Evidência prática para avaliação:** definir requisitos e registros pertinentes ao escopo, como documentação, métricas, testes, controles e decisões de implementação.

**[Série ISO/IEC 38505](https://www.iso.org/standards.html).** Governança de dados, responsabilidades e decisões sobre seu uso. **Evidência prática para avaliação:** definir requisitos e registros pertinentes ao escopo, como documentação, métricas, testes, controles e decisões de implementação.

**[ISO/IEC 30141](https://www.iso.org/standards.html).** Arquitetura de referência para ecossistemas de Internet das Coisas. **Evidência prática para avaliação:** definir requisitos e registros pertinentes ao escopo, como documentação, métricas, testes, controles e decisões de implementação.

#### Normas setoriais, aplicáveis apenas em casos específicos

**[IEC 61508](https://www.iso.org/standards.html).** Segurança funcional de sistemas eletrônicos e programáveis. **Evidência prática para avaliação:** definir requisitos e registros pertinentes ao escopo, como documentação, métricas, testes, controles e decisões de implementação.

**[ISO 26262](https://www.iso.org/standards.html).** Segurança funcional de veículos e componentes automotivos. **Evidência prática para avaliação:** definir requisitos e registros pertinentes ao escopo, como documentação, métricas, testes, controles e decisões de implementação.

**[IEC 62304](https://www.iso.org/standards.html).** Processos de ciclo de vida para software de dispositivos médicos. **Evidência prática para avaliação:** definir requisitos e registros pertinentes ao escopo, como documentação, métricas, testes, controles e decisões de implementação.

**[ISO 14971](https://www.iso.org/standards.html).** Gestão de risco de dispositivos médicos. **Evidência prática para avaliação:** definir requisitos e registros pertinentes ao escopo, como documentação, métricas, testes, controles e decisões de implementação.

**[EN 50128](https://www.iso.org/standards.html).** Software de sinalização e proteção ferroviária. **Evidência prática para avaliação:** definir requisitos e registros pertinentes ao escopo, como documentação, métricas, testes, controles e decisões de implementação.

**[DO-178C](https://www.iso.org/standards.html).** Garantia de software para equipamentos aeronáuticos. **Evidência prática para avaliação:** definir requisitos e registros pertinentes ao escopo, como documentação, métricas, testes, controles e decisões de implementação.

**[ARP4754A](https://www.iso.org/standards.html).** Engenharia de sistemas e aeronaves civis. **Evidência prática para avaliação:** definir requisitos e registros pertinentes ao escopo, como documentação, métricas, testes, controles e decisões de implementação.

**[Automotive SPICE, modelo setorial](https://www.iso.org/standards.html).** Avaliação de capacidade de processos de desenvolvimento automotivo, sem ser norma ISO independente. **Evidência prática para avaliação:** definir requisitos e registros pertinentes ao escopo, como documentação, métricas, testes, controles e decisões de implementação.

### 12.3. Verificação normativa e registro de evidências

- [ ] Manter matriz das normas relevantes por projeto, serviço, risco e tipo de atividade.
- [ ] Confirmar número, edição, status de publicação e eventual substituição da norma.
- [ ] Separar exigências normativas, orientações de boas práticas e propostas internas.
- [ ] Identificar quais cláusulas e controles foram adotados e quais são inaplicáveis.
- [ ] Mapear os requisitos para os controles automatizados e humanos das seções anteriores.
- [ ] Associar responsável, evidência, último resultado e periodicidade a cada avaliação.
- [ ] Registrar justificativas, riscos residuais e exceções com prazo e reavaliação.
- [ ] Não afirmar certificação, acreditação nem atendimento integral sem avaliação formal.
- [ ] Revisar periodicamente referências históricas, retiradas ou em desenvolvimento.

**Prioridades propostas:** para software, 12207, 29148, 42010, 29119 e 25010. Para segurança e privacidade, 27001, 27002 e 27701. Para inteligência artificial, 42001 e gestão de riscos. Para serviços operacionais, 20000-1. Para programas institucionais, ISO 9001. PCI DSS somente mediante avaliação específica do ambiente de pagamentos.

**Catálogos institucionais:** [ISO](https://www.iso.org/standards.html), [IEC](https://webstore.iec.ch/), [IEEE](https://standards.ieee.org/) e [PCI SSC](https://www.pcisecuritystandards.org/pt/document_library/).

## 13. Operação, APIs, dados e entrega (quando aplicável)

### 13.1. API e integração

- [ ] Definir contratos de API usando OpenAPI, AsyncAPI ou alternativa apropriada.
- [ ] Validar entradas, saídas, tamanhos de payloads e esquemas.
- [ ] Documentar semântica dos erros, códigos de status e limites.
- [ ] Implementar autenticação e autorização por recurso, ação e contexto.
- [ ] Testar BOLA/IDOR, rate limiting, abuso e enumeração de identificadores.
- [ ] Definir idempotência para operações que exigem repetição segura.
- [ ] Adotar timeouts, retries com backoff e circuit breakers quando apropriados.
- [ ] Versionar contratos e definir política de compatibilidade e depreciação.
- [ ] Evitar exposição de dados internos e erros com detalhes sensíveis.
- [ ] Automatizar testes de contrato entre consumidores e provedores.

### 13.2. Banco de dados, migrações e qualidade dos dados

- [ ] Definir regras de integridade, restrições, índices e transações adequadas.
- [ ] Versionar migrações e testar alterações de esquema antes da produção.
- [ ] Planejar migrações compatíveis com implantação gradual quando necessário.
- [ ] Testar rotinas de recuperação e integridade do banco de dados.
- [ ] Proteger credenciais, conexões e backups do banco.
- [ ] Aplicar menor privilégio para contas de leitura, escrita, migração e administração.
- [ ] Documentar políticas de retenção, exclusão, anonimização e arquivamento.
- [ ] Validar fontes, proveniência, esquemas e qualidade de datasets.
- [ ] Gerenciar mudanças de esquema em pipelines de dados.
- [ ] Monitorar consultas lentas, saturação, espaço e disponibilidade.

### 13.3. Deploy, observabilidade e confiabilidade

- [ ] Documentar pipeline de publicação e ambientes.
- [ ] Separar aprovações, credenciais e permissões de produção das de desenvolvimento.
- [ ] Definir estratégia de rollout, rollback e migração de dados.
- [ ] Implantar health checks e readiness checks quando necessários.
- [ ] Definir SLI/SLO e monitoramento proporcional ao impacto.
- [ ] Adotar logs estruturados com correlação, sem dados sensíveis.
- [ ] Instrumentar métricas e rastreamento distribuído onde houver benefício.
- [ ] Definir alertas acionáveis com responsáveis e procedimentos de resposta.
- [ ] Definir RPO e RTO quando houver obrigação de continuidade.
- [ ] Exercitar recuperação, restauração de backup e resposta a incidentes.
- [ ] Verificar configurações de infraestrutura como código antes da aplicação.
- [ ] Revisar políticas de rede, segredos e permissões em produção.

### 13.4. Publicação e versionamento de releases

- [ ] Definir estratégia de versionamento e política de breaking changes.
- [ ] Publicar changelog ou notas de versão com mudanças e limitações.
- [ ] Automatizar verificações antes de criar releases e distribuir artefatos.
- [ ] Fixar versões e dependências efetivamente utilizadas no build.
- [ ] Avaliar assinatura, checksums, procedência e atestação dos artefatos.
- [ ] Testar instalação e atualização a partir dos artefatos publicados.
- [ ] Documentar compatibilidade, migrações e procedimento de rollback.
- [ ] Publicar avisos de segurança e correções com processo responsável.
- [ ] Manter histórico de versões e política de suporte.
- [ ] Evitar publicar tokens, dados de teste reais ou artefatos de depuração.

## 14. Configurações e exemplos de referência

Os exemplos abaixo **não dispensam consulta à documentação oficial** nem testes de segurança no repositório específico.

### GitHub Actions: quality gate

```yaml
name: CI

on:
  push:
    branches: [main]
  pull_request:

permissions:
  contents: read

jobs:
  lint:
    runs-on: ubuntu-latest
    steps:
      - run: echo "Substitua por verificações reais de lint"
  test:
    runs-on: ubuntu-latest
    steps:
      - run: echo "Substitua por testes reais"

  gate:
    name: gate
    if: ${{ always() }}
    needs: [lint, test]
    runs-on: ubuntu-latest
    steps:
      - name: Verificar resultados obrigatórios
        env:
          NEEDS_JSON: ${{ toJSON(needs) }}
        run: |
          python3 - <<'PY'
          import json, os, sys
          results = {k: v["result"] for k, v in json.loads(os.environ["NEEDS_JSON"]).items()}
          print(results)
          sys.exit(0 if results and all(v == "success" for v in results.values()) else 1)
          PY
```

**Importante:** jobs demonstrativos acima não devem ser tratados como checks de qualidade efetivos. Substitua por lint e testes reais antes de tornar o gate obrigatório. Em GitHub Actions, confirme os eventos e permissões de cada workflow e fixe ações externas pelo SHA completo.

### Ferramentas por responsabilidade

| Categoria | Opções de ferramentas | Escopo típico |
| --- | --- | --- |
| GitHub Actions | actionlint, zizmor | Sintaxe e segurança dos workflows |
| Dockerfiles | Hadolint, Trivy | Boas práticas e vulnerabilidades |
| YAML e shell | yamllint, ShellCheck, shfmt | Sintaxe, lint e formatação |
| Markdown e links | markdownlint-cli2, lychee | Documentação |
| Segurança de segredos | Gitleaks | Exposição acidental |
| SAST | Semgrep, CodeQL | Padrões de vulnerabilidade no código |
| Vulnerabilidades | OSV-Scanner, Trivy | Dependências, imagens e sistemas de arquivos |
| GitHub / supply chain | OpenSSF Scorecard | Avaliação periódica de práticas de segurança |
| Regras arquiteturais | ast-grep | Padrões sintáticos customizados |
| JS/TS | ESLint, Biome, Prettier, Stylelint | Análise e formatação |
| Código não usado | Knip | Exports, arquivos e dependências |
| Duplicação | jscpd | Blocos de código duplicados |
| Testes | Vitest, fast-check | Testes unitários e baseados em propriedades |
| Atualizações | Renovate, Dependabot | Dependências, ações e imagens |
| SBOM | Syft, CycloneDX | Inventário de componentes |
| Atestações | Sigstore, GitHub Artifact Attestations | Proveniência dos artefatos |

- [ ] Configurar execução local reproduzível das ferramentas aplicáveis.
- [ ] Fixar versões e registrar os respectivos comandos.
- [ ] Ativar checks obrigatórios para controles críticos e manter relatórios úteis.
- [ ] Evitar ferramentas redundantes sem ganho objetivo de cobertura.
- [ ] Documentar exclusões e falsos positivos, com responsáveis e justificativas.
- [ ] Reavaliar periodicamente configurações e atualizar ferramentas.


---

## 15. Guia de adoção por perfil

| Perfil | Controles prioritários |
| --- | --- |
| Documentação | README, licença, contribuições, Markdownlint, verificação de links e acessibilidade |
| Biblioteca open source | Testes, matriz de compatibilidade, SemVer, release, SBOM, vulnerabilidades e código de conduta |
| Aplicação web | Lint, testes, SAST, segredos, acessibilidade, autenticação, privacidade, CI e deploy |
| API e backend | Contratos, autorização, validação de entrada, observabilidade, testes de integração e migrações |
| Dados e IA | Proveniência, licenças de datasets, qualidade, vieses, avaliação, reprodutibilidade e privacidade |
| Infraestrutura | IaC, menor privilégio, hardening, scanners, backups, SLO e recuperação |
| GitHub Actions | actionlint, zizmor, permissões mínimas, pinning de actions e proteção contra PR não confiável |

### Campos mínimos para acompanhar cada controle

- **ID**: identificador estável.
- **Aplicabilidade**: aplicável, não aplicável ou a avaliar.
- **Criticidade**: essencial, recomendado ou opcional.
- **Estado**: pendente, configurado, verificado ou exceção documentada.
- **Evidência**: configuração, workflow, log de execução, issue ou commit.
- **Responsável e revisão**: pessoa ou equipe responsável e data da próxima revisão.

## 16. Perfil de configurações do GitHub e arquivos obrigatórios por contexto

Checklist operacional condensado a partir do [guia de GitHub](docs/github-repository-setup.md). O perfil de merge e o padrão visual são **preferências configuráveis**, não exigências normativas. Itens continuam desmarcados até validação do repositório.

### 1. Settings → General: perfil preferido
- [ ] Definir descrição curta, URL do projeto, tópicos, imagem social e visibilidade intencional.
- [ ] Confirmar a branch padrão, preferencialmente `main`, se esta for a convenção adotada.
- [ ] **Allow merge commits: ativado**, preferencialmente com mensagem padrão consistente.
- [ ] **Allow squash merging: desativado** no perfil pessoal, preservando o histórico dos commits.
- [ ] **Allow rebase merging: desativado** no perfil pessoal, usando merge commits explícitos.
- [ ] **Automatically delete head branches: ativado** após o merge.
- [ ] Avaliar **Allow auto-merge** de modo separado, conforme permissões, checks e revisão.
- [ ] Decidir se issues, Discussions, Projects e Wiki serão usados; desativar superfícies desnecessárias.
- [ ] Impedir edição irrestrita de repositórios por automações e colaboradores sem necessidade.
- [ ] Preferir não criar repositórios com arquivos duplicados de políticas compartilhadas, salvo quando precisarem de regras próprias.
- [ ] Verificar se branches protegidas ou rulesets impedem a remoção automática das branches de trabalho.
- [ ] Avaliar configurações de forks, permissões de colaboradores externos e outras superfícies do repositório.

### 2. Rulesets, proteção de branch e política de pull requests
- [ ] Proteger a branch padrão contra exclusão e force push.
- [ ] Impedir push direto na branch protegida, usando pull requests por padrão.
- [ ] Configurar checks obrigatórios realmente existentes, com nomes estáveis.
- [ ] Exigir que o job agregador `gate` valide falhas e jobs indevidamente pulados.
- [ ] Exigir resolução de conversas de revisão quando houver revisão em equipe.
- [ ] Definir número de aprovações de acordo com o tamanho da equipe, risco e capacidade operacional.
- [ ] Exigir revisão de CODEOWNERS para áreas críticas quando possível.
- [ ] Invalidar aprovações antigas quando commits novos alterarem a revisão de risco.
- [ ] Restringir bypass de rulesets a identidades e cenários indispensáveis, com registro de auditoria.
- [ ] Avaliar exigência de commits assinados e validação da cadeia de confiança.
- [ ] Avaliar bloqueio de históricos lineares: **não exigir linear history** se a preferência é merge commit.
- [ ] Não impor simultaneamente regras incompatíveis com a estratégia de merge escolhida.
- [ ] Avaliar merge queue para equipes de alta concorrência e conferir sua compatibilidade com os workflows.
- [ ] Controlar criação de branches e tags protegidas, incluindo padrões de release.
- [ ] Configurar políticas diferentes para `main`, branches de release e tags quando necessário.
- [ ] Verificar se checks são executados nos eventos relevantes, inclusive `merge_group` se houver merge queue.
- [ ] Testar uma PR de exemplo com sucesso, erro, job cancelado e job skipped.
- [ ] Documentar exceções temporárias, responsável e prazo de revisão.

### 3. Repository settings: segurança e automações
- [ ] Habilitar MFA e preferir passkeys/FIDO2 resistentes a phishing para administradores.
- [ ] Revisar App installations, OAuth grants, deploy keys e tokens pessoais.
- [ ] Habilitar dependency graph, alertas de dependências e atualizações de segurança quando disponíveis.
- [ ] Avaliar Dependabot ou Renovate sem permitir aprovações e merges automáticos indiscriminados.
- [ ] Ativar secret scanning, push protection e Private Vulnerability Reporting conforme disponibilidade.
- [ ] Configurar CodeQL/code scanning e alertas SARIF para o código que realmente se aplica.
- [ ] Limitar permissões padrão de `GITHUB_TOKEN` e do GitHub Actions a leitura.
- [ ] Conceder `contents: write`, `packages: write`, `security-events: write` e `id-token: write` somente a jobs que necessitem.
- [ ] Fixar GitHub Actions externas pelo SHA completo do commit, mantendo comentários com a versão.
- [ ] Utilizar `persist-credentials: false` no checkout quando as credenciais não forem necessárias.
- [ ] Evitar `pull_request_target` executando código de PR não confiável com segredos.
- [ ] Definir política de Actions autorizadas e permissões para criação de PRs por workflows.
- [ ] Preferir OIDC com credenciais de curta duração para implantações em provedores externos.
- [ ] Separar ambientes de produção, proteger secrets e exigir aprovação para deploys sensíveis.
- [ ] Configurar `concurrency` e `cancel-in-progress` de acordo com o tipo de job.
- [ ] Definir prazo de retenção e permissões de leitura de artefatos e logs.
- [ ] Verificar ações inseguras de `workflow_run`, uploads, caches e artefatos não confiáveis.
- [ ] Executar `actionlint`, `zizmor` e, quando aplicável, OpenSSF Scorecard.
- [ ] Configurar branch protection, rulesets e checks de acordo com os recursos disponíveis no plano.

### 4. Repositório especial `owner/.github`
- [ ] Criar e manter `owner/.github` para políticas comunitárias reutilizáveis entre repositórios elegíveis.
- [ ] Documentar claramente quais arquivos funcionam como defaults e quando arquivos locais prevalecem.
- [ ] Manter `CONTRIBUTING.md` com fluxo de contribuição, testes, documentação, licenças e revisão.
- [ ] Manter `CODE_OF_CONDUCT.md` com canais de denúncia e tratamento de conduta.
- [ ] Manter `SECURITY.md` com canal privado e política de versões suportadas.
- [ ] Manter `SUPPORT.md` diferenciando dúvidas, bugs, propostas e vulnerabilidades.
- [ ] Manter `.github/ISSUE_TEMPLATE/bug.yml` para bugs reproduzíveis.
- [ ] Manter `.github/ISSUE_TEMPLATE/feature.yml` para propostas de funcionalidade.
- [ ] Manter `.github/ISSUE_TEMPLATE/config.yml` para links de suporte e opções de issues.
- [ ] Manter `.github/DISCUSSION_TEMPLATE/` para ideias, perguntas e discussões quando pertinente.
- [ ] Adicionar `.github/FUNDING.yml` quando houver opções reais de apoio financeiro.
- [ ] Revisar o escopo de herança das community health files: defaults de `.github` não substituem todas as configurações do repositório.
- [ ] Não copiar dados sensíveis, endereços privados ou canais internos nos defaults públicos.

### 5. Arquivos recomendados em cada repositório
- [ ] Adicionar `CODEOWNERS` em um dos locais reconhecidos (`.github/`, raiz ou `docs/`) quando houver responsáveis aptos a revisar.
- [ ] Cobrir código-fonte, infraestrutura, workflows, arquivos de segurança e regras de CI com CODEOWNERS quando aplicável.
- [ ] Confirmar sintaxe, precedência de padrões e permissão de escrita dos owners.
- [ ] Criar template de PR com descrição, motivação, teste, impacto, riscos e checklist de publicação.
- [ ] Usar GitHub Issue Forms para informações estruturadas quando úteis, sem tornar burocrático o relato.
- [ ] Referenciar políticas globais de `.github` e sobrescrever somente por necessidade explícita.
- [ ] Manter licença própria do projeto em `LICENSE` e licenças de terceiros separadas.
- [ ] Manter arquivos editoriais de configurações como `.editorconfig`, `.gitignore`, `.gitattributes` e configurações de lint.
- [ ] Evitar duplicar instruções conflitantes entre README, CONTRIBUTING e documentação.

### 6. README: apresentação, badges e transparência
- [ ] Iniciar com nome, propósito, estado do projeto, principais recursos e público.
- [ ] Mostrar badges significativas, com legenda e link de destino correto.
- [ ] Preferir Shields.io com estilos consistentes, como `for-the-badge` para cabeçalho e `flat-square` para informações detalhadas.
- [ ] Manter `labelColor=0b1120` e cores por função no perfil visual inspirado nos repositórios de referência.
- [ ] Incluir status real de CI e documentação, quando existentes.
- [ ] Incluir licença com destino para o texto integral no repositório.
- [ ] Considerar OpenSSF Scorecard, Renovate, versão das ferramentas e último run, sem sugerir avaliação não executada.
- [ ] Incluir badges de último commit, atividade mensal, PRs, issues, stars e forks quando fizerem sentido.
- [ ] Incluir badge de local de produção ou autoria ("Feito no Brasil") somente quando verdadeiro e útil.
- [ ] Manter rótulos em português quando o README tiver público lusófono.
- [ ] Não incluir badges dinâmicas que exponham dados privados, tokens ou endpoints internos.
- [ ] Conferir se o badge não quebra com rate limiting ou alteração de API de terceiros.
- [ ] Evitar poluição visual e agrupar badges por operação, qualidade, tecnologia e comunidade.
- [ ] Ter resumo de instalação, comandos locais, testes e links para documentação e suporte.
- [ ] Incluir disclaimer explícito sobre estágio, limitações, riscos, ausência de garantias e licença, quando necessário.
- [ ] Adicionar seção **Licença** com link para o texto integral, inclusive distinção entre código, documentação e assets.
- [ ] Adicionar **Créditos e agradecimentos** com link para `CREDITS.md` e licenças de terceiros.
- [ ] Informar ferramentas, serviços e dados de terceiros utilizados sem sugerir endosso desses fornecedores.
- [ ] Manter links de `SECURITY.md`, `CONTRIBUTING.md` e `SUPPORT.md` visíveis.

### 7. Checklist de auditoria inicial
- [ ] Registrar screenshot/export das configurações de General, Branches, Rulesets, Actions e Security, sem revelar segredos.
- [ ] Fazer PR de teste para verificar revisão, gates, merge commit e exclusão automática de branch.
- [ ] Testar canal privado de reporte de vulnerabilidade.
- [ ] Verificar que badges, links, licenças e créditos correspondem ao estado real.
- [ ] Agendar revisão de permissões, bots, tokens e arquivos comunitários.

## 17. Hardening operacional: identidades, YubiKey, SSH, sandbox e infraestrutura

Controles de hardening detalhados em [segurança operacional](docs/security-hardening.md). Preferir chaves protegidas por hardware e não manter chaves privadas SSH em disco é um **perfil de segurança elevado**, não uma regra universal.

### 1. Inventário, risco e delimitação de confiança
- [ ] Identificar ativos, fluxos de dados, dependências, provedores e suas criticidades.
- [ ] Classificar informações conforme sensibilidade, necessidade de integridade e disponibilidade.
- [ ] Definir ameaças, atores, superfícies de ataque, fronteiras de confiança e pressupostos.
- [ ] Registrar ameaças internas, acesso indevido, ransomware, roubo e comprometimento da cadeia de suprimentos.
- [ ] Elaborar diagrama de fluxo de dados e identificar exposição de informações sensíveis.
- [ ] Definir controles mínimos proporcionais a risco, criticidade e estágio.
- [ ] Definir prioridades, responsáveis, risco residual, evidências e prazos.
- [ ] Reavaliar após mudanças de arquitetura, dependências, permissões e incidentes.
- [ ] Revisar requisitos legais e contratuais sobre retenção, logs e tratamento de dados.

### 2. Identidade, MFA, FIDO2 e YubiKey
- [ ] Inventariar todas as identidades humanas, técnicas, de bots e service accounts.
- [ ] Preferir passkeys com WebAuthn/FIDO2 resistentes a phishing em contas críticas.
- [ ] Avaliar YubiKey ou outra chave física FIDO2 como autenticador de alta segurança.
- [ ] Cadastrar no mínimo um método independente de recuperação, preferindo chave de segurança reserva sob custódia segura.
- [ ] Proteger códigos de recuperação, evitando mesma localização que dispositivo primário.
- [ ] Evitar depender exclusivamente de SMS e OTP quando autenticação resistente a phishing for viável.
- [ ] Aplicar MFA forte a GitHub, email, registradores DNS, provedores cloud, gerenciadores de senhas e outros control planes.
- [ ] Distinguir passkeys sincronizáveis de credenciais restritas a hardware, conforme risco.
- [ ] Exigir autenticação recente para operações sensíveis e gestão de credenciais.
- [ ] Evitar compartilhamento de contas; utilizar identidades individuais, trilhas de auditoria e autorização por função.
- [ ] Revogar prontamente acessos, sessões, passkeys e tokens de colaboradores desligados.
- [ ] Reavaliar MFA e privilégios de contas de emergência sem criar ponto único de falha.

### 3. SSH, Git, certificados e proteção de chaves privadas
- [ ] Preferir chaves SSH não exportáveis geradas em token físico (por exemplo, FIDO2) quando o ambiente oferecer suporte.
- [ ] Alternativamente, considerar SSH agent de gerenciador de credenciais, Secure Enclave, TPM ou solução equivalente, conforme suporte real.
- [ ] Se armazenar chave privada em disco, exigir proteção por senha forte quando suportada, permissões restritas, criptografia de disco e política de backup adequada.
- [ ] Evitar incluir chaves privadas em dotfiles, backups não criptografados, repositórios, screenshots ou logs.
- [ ] Não copiar a mesma chave privada para múltiplos hosts sem motivo documentado.
- [ ] Separar chaves por escopo ou ambiente quando isso reduzir impacto de comprometimento.
- [ ] Aplicar validade curta de certificados SSH quando há autoridade certificadora e infraestrutura apropriadas.
- [ ] Validar identidade do host SSH, manter `known_hosts` e investigar alterações inesperadas.
- [ ] Evitar `StrictHostKeyChecking=no` como configuração global.
- [ ] Restringir `ForwardAgent` e agent forwarding a ambientes confiáveis e casos justificados.
- [ ] Proteger o socket do agente e evitar exposição em containers, VMs e sessões remotas não confiáveis.
- [ ] Registrar inventário de chaves públicas, acessos concedidos, data de criação e revogação.
- [ ] Definir processos de rotação e revogação ao perder token ou comprometer conta.
- [ ] Avaliar assinatura de commits/tags e proteção de tags de release sem confundir assinatura com revisão.
- [ ] Proteger chaves de assinatura e aplicar política de rotação e recuperação.

### 4. Ciclo de vida de secrets, PKI e criptografia
- [ ] Inventariar secrets, chaves, certificados, tokens, credenciais de deploy e credenciais de terceiros.
- [ ] Reduzir secrets de longa duração; preferir identidades federadas, OIDC e credenciais temporárias.
- [ ] Usar vault ou secret manager com controles de acesso específicos.
- [ ] Usar SOPS/age ou mecanismos equivalentes para segredos versionados somente criptografados, quando necessário.
- [ ] Não armazenar segredos em variáveis públicas de CI, artefatos, imagens de container ou logs.
- [ ] Separar chaves por função: criptografia de dados, assinatura, autenticação e wrapping.
- [ ] Proteger root CA, intermediárias, chaves de recuperação e trust anchors.
- [ ] Planejar geração, distribuição, ativação, rotação, revogação, expiração e descarte de chaves.
- [ ] Controlar backup e recuperação das chaves de dados, diferenciando chaves recuperáveis das de assinatura.
- [ ] Definir regras e exceções para exportação e armazenamento de chaves privadas.
- [ ] Usar algoritmos, protocolos, tamanhos de chave e bibliotecas mantidas e apropriadas ao risco.
- [ ] Exigir TLS e validação correta de certificados nos pontos de comunicação.
- [ ] Monitorar vencimento de certificados e planejar renovação.
- [ ] Considerar mTLS para comunicação entre serviços com forte requisito de identidade.
- [ ] Evitar criar criptografia própria ou usar hashes de senha sem algoritmos próprios para armazenamento de senhas.
- [ ] Revisar política de criptografia em repouso, backups, bancos e campos sensíveis.
- [ ] Considerar criptografia por campo na aplicação quando o risco não for resolvido por criptografia de volume.
- [ ] Aplicar separação de funções e aprovação múltipla a operações com chaves especialmente críticas.
- [ ] Ensaiar cenários de perda de chave, comprometimento, recuperação e recriptografia de dados.

### 5. Workstation, laptop e endpoints de desenvolvimento
- [ ] Utilizar sistema operacional suportado e aplicar atualizações de segurança.
- [ ] Ativar criptografia integral de disco quando houver dados de trabalho.
- [ ] Configurar bloqueio automático de sessão e autenticação resistente a ataques triviais.
- [ ] Executar trabalho cotidiano sem privilégios administrativos.
- [ ] Restringir instalação de software, drivers, extensões e agentes desnecessários.
- [ ] Revisar extensões do navegador e do editor com acesso a código, arquivos e credenciais.
- [ ] Manter firewall ativo, portas de entrada mínimas e serviços dispensáveis desabilitados.
- [ ] Utilizar proteção de execução e isolamento oferecidos pelo sistema operacional.
- [ ] Verificar integridade de downloads e proveniência de binários antes de executar.
- [ ] Evitar copiar tokens, secrets e credenciais para clipboard compartilhado ou logs de terminal.
- [ ] Reduzir a exposição de metadados e segredos em gravações de tela, relatórios e bug reports.
- [ ] Definir backup criptografado e testado para arquivos e configurações necessários à recuperação.
- [ ] Revisar permissões de dispositivos USB e mídias removíveis quando pertinentes ao risco.

### 6. Sandboxing e isolamento de código não confiável
- [ ] Executar builds, scripts externos, testes desconhecidos e ferramentas pouco confiáveis em ambiente isolado quando possível.
- [ ] Avaliar sandboxing por containers, VMs, namespaces e mecanismos nativos do SO.
- [ ] Usar rootless containers ou usuário não privilegiado quando possível.
- [ ] Impedir execução de container com `--privileged` sem justificativa.
- [ ] Minimizar capabilities Linux e usar `no-new-privileges` quando disponível.
- [ ] Aplicar seccomp, AppArmor ou SELinux conforme ambiente.
- [ ] Evitar montar `/var/run/docker.sock` e diretórios de credenciais em containers não confiáveis.
- [ ] Montar arquivos necessários somente leitura e limitar escrita a diretórios temporários.
- [ ] Limitar memória, CPU, tempo, disco e processos quando código não confiável puder consumir recursos.
- [ ] Controlar saída de rede e DNS em jobs não confiáveis, evitando exfiltração.
- [ ] Desabilitar acesso ao host, namespaces privilegiados e dispositivos desnecessários.
- [ ] Eliminar estado do sandbox após executar código potencialmente hostil.
- [ ] Não assumir que qualquer container representa fronteira de segurança equivalente a VM.
- [ ] Testar comportamento de fuga de isolamento e atualizar runtimes e kernels relevantes.
- [ ] Isolar a execução de código gerado por IA e comandos sugeridos por terceiros antes de acesso a repositórios ou segredos.

### 7. SSH server, hosts, cloud e Kubernetes
- [ ] Remover serviços e portas não utilizados; configurar firewall de entrada com política restritiva.
- [ ] Restringir login de root, autenticação de senha e usuários SSH conforme risco e política.
- [ ] Configurar logs persistentes e sincronização segura de horário.
- [ ] Aplicar baselines CIS ou equivalentes selecionadas para distribuição e versão.
- [ ] Monitorar atualizações críticas e vulnerabilidades do host, firmware e hipervisor.
- [ ] Manter contas de serviço separadas e privilégios mínimos.
- [ ] Segregar redes administrativas, produção e desenvolvimento quando aplicável.
- [ ] Definir controles explícitos de egress para workloads sensíveis.
- [ ] Restringir acesso à API do cluster e aos consoles de administração.
- [ ] Aplicar RBAC, policies de rede, Pod Security e controles do admission quando adequado.
- [ ] Evitar containers root, hostNetwork e mounts privilegiados desnecessários.
- [ ] Fixar versões/digests de imagens e verificar procedência.
- [ ] Proteger armazenamento persistente, credenciais de infraestrutura e volumes.
- [ ] Validar manifests e IaC com scanners, política como código e revisão.
- [ ] Definir alertas de indisponibilidade, alteração de configuração e atividade suspeita.
- [ ] Testar backup e disaster recovery, inclusive cópia fora do cluster.
- [ ] Registrar mudanças e separar credenciais de operações rotineiras das emergenciais.

### 8. Aplicação, API e banco de dados
- [ ] Validar dados de entrada, codificação de saída e proteção contra injeção.
- [ ] Implementar autorização em servidor por recurso, operação, tenant e dono dos dados.
- [ ] Usar sessão e cookies seguros (HttpOnly, Secure, SameSite quando apropriado).
- [ ] Proteger operações contra CSRF, SSRF, upload malicioso, path traversal e deserialização insegura conforme exposição.
- [ ] Definir CSP e cabeçalhos HTTP defensivos de maneira compatível com a aplicação.
- [ ] Evitar logs com tokens, payloads secretos ou dados pessoais desnecessários.
- [ ] Proteger credenciais de conexão e segregar permissões administrativas, migrações, leitura e escrita.
- [ ] Planejar rate limiting, quotas e prevenção de abuso de recursos.
- [ ] Tratar erros sem vazar stack traces ou detalhes internos para usuários não autorizados.
- [ ] Definir proteção contra enumeração e ataques de força bruta onde houver autenticação.
- [ ] Testar isolamento entre contas, ambientes e tenants.
- [ ] Incluir verificação de vulnerabilidades e testes automatizados relevantes para cada fronteira de confiança.

### 9. CI/CD e supply chain
- [ ] Aplicar permissões mínimas por workflow e por job.
- [ ] Fixar ações de terceiros por SHA e verificar alterações antes de atualizar.
- [ ] Desativar persistência de credenciais do checkout quando desnecessária.
- [ ] Isolar execução de PRs externos, sem acesso a segredos e tokens privilegiados.
- [ ] Evitar injeção em `run:` a partir de expressões não confiáveis; usar variáveis de ambiente e validação.
- [ ] Executar lint de workflow (`actionlint`) e avaliação de risco (`zizmor`).
- [ ] Habilitar secret scanning, SAST, SCA e análise de imagens conforme stack.
- [ ] Inventariar componentes por SBOM e avaliar licenças e CVEs.
- [ ] Usar build reproduzível e proveniência/atestação quando o artefato justificar.
- [ ] Proteger políticas de publicação, tokens de registry, assinaturas e ambientes de deployment.
- [ ] Separar jobs não confiáveis de jobs que fazem release e deployment.
- [ ] Criar mecanismos de bloqueio por severidade com exceções temporárias rastreáveis.

### 10. Monitoração, incidentes e recuperação
- [ ] Registrar eventos de autenticação, mudanças administrativas, violações de acesso e incidentes relevantes.
- [ ] Definir retenção de logs, controles de acesso e proteção contra adulteração.
- [ ] Centralizar logs, métricas e tracing proporcionais ao escopo.
- [ ] Detectar comportamentos anômalos, falhas de controle e indisponibilidade.
- [ ] Preparar playbooks para credenciais comprometidas, token perdido, vazamento, malware e falha de infraestrutura.
- [ ] Definir triagem, severidade, responsáveis, comunicação e escalonamento.
- [ ] Testar revogação e substituição de credenciais após incidente.
- [ ] Definir RPO/RTO e testar restauração de backup.
- [ ] Fazer revisão pós-incidente, ações corretivas e reavaliação do modelo de ameaças.
- [ ] Guardar evidências de segurança de modo proporcional à privacidade e obrigações legais.

### 11. Verificação e evidências
- [ ] Realizar testes independentes dos controles considerados mais críticos.
- [ ] Separar check automatizado de avaliação manual e declarar limitações.
- [ ] Guardar relatórios de execução e anotar ferramentas e versões.
- [ ] Não declarar hardening ou conformidade efetivos apenas porque existe um arquivo de configuração.
- [ ] Reavaliar os controles quando houver mudança material de tecnologia ou de ameaça.

## 18. Controles derivados de NIST, ISO/IEC/IEEE e requisitos não funcionais

Itens detalhados no [mapeamento de normas para requisitos verificáveis](docs/standards-to-controls.md). Esta lista interpreta temas de NIST/ISO como controles aplicáveis por risco; **não reproduz integralmente normas proprietárias nem equivale a certificação**. Os IDs abaixo são próprios deste checklist e não números oficiais de cláusulas.

### 1. Requisitos não funcionais: ISO/IEC 25010:2023

#### NFR-FS: Adequação funcional
- [ ] **NFR-FS-01** Identificar funcionalidades prometidas e mapear cada uma às necessidades de usuários e stakeholders.
- [ ] **NFR-FS-02** Definir critérios de aceite para completude, correção e adequação dos resultados.
- [ ] **NFR-FS-03** Especificar comportamentos normais, casos-limite, falhas e condições de entrada.
- [ ] **NFR-FS-04** Executar testes de comportamento e de regressão sobre requisitos críticos.

#### NFR-PE: Eficiência de desempenho
- [ ] **NFR-PE-01** Definir latência e percentis de resposta (por exemplo, p95 e p99) por operação crítica.
- [ ] **NFR-PE-02** Definir throughput, tempo de processamento, capacidade e consumo máximo de recursos.
- [ ] **NFR-PE-03** Executar carga, estresse e testes de degradação representativos.
- [ ] **NFR-PE-04** Medir desempenho com cargas e ambiente reproduzíveis, comparando com limites de aceite.

#### NFR-CO: Compatibilidade
- [ ] **NFR-CO-01** Definir versões suportadas de SO, navegador, linguagem, protocolos e dependências.
- [ ] **NFR-CO-02** Validar interoperabilidade, formatos abertos e contratos entre sistemas.
- [ ] **NFR-CO-03** Testar coexistência com outros serviços sem interferência indevida.
- [ ] **NFR-CO-04** Documentar compatibilidade retroativa e política de mudanças incompatíveis.

#### NFR-IC: Capacidade de interação
- [ ] **NFR-IC-01** Identificar públicos, tarefas, capacidades e necessidades de acessibilidade.
- [ ] **NFR-IC-02** Testar clareza, orientação, consistência, prevenção de erro e facilidade de aprendizado.
- [ ] **NFR-IC-03** Verificar navegação por teclado, tecnologias assistivas e feedback de ações.
- [ ] **NFR-IC-04** Usar testes com pessoas representativas quando o produto exigir validação de usabilidade.

#### NFR-RE: Confiabilidade
- [ ] **NFR-RE-01** Definir meta de disponibilidade e janela de observação para serviços.
- [ ] **NFR-RE-02** Especificar comportamento sob falhas de dependências, rede, processos e dados.
- [ ] **NFR-RE-03** Implementar recuperação, retries controlados, tolerância a falhas e failover quando necessários.
- [ ] **NFR-RE-04** Testar recuperação, integridade de estado e comportamento em condições degradadas.

#### NFR-SE: Segurança
- [ ] **NFR-SE-01** Definir requisitos de confidencialidade, integridade, autenticidade e responsabilização.
- [ ] **NFR-SE-02** Modelar ameaças, fronteiras de confiança, perfis de acesso e abuso.
- [ ] **NFR-SE-03** Estabelecer critérios testáveis para autenticação, autorização, auditoria e proteção de dados.
- [ ] **NFR-SE-04** Verificar segurança por testes automatizados, revisão e avaliação manual proporcional ao risco.

#### NFR-MA: Manutenibilidade
- [ ] **NFR-MA-01** Documentar arquitetura, decisões, interfaces e responsabilidades.
- [ ] **NFR-MA-02** Estabelecer testes e métricas de cobertura relevantes, sem perseguir cobertura como fim.
- [ ] **NFR-MA-03** Controlar complexidade, dependências, duplicação e acoplamento excessivo.
- [ ] **NFR-MA-04** Verificar facilidade de modificação e diagnóstico por meio de revisão, refatoração e testes.

#### NFR-FL: Flexibilidade
- [ ] **NFR-FL-01** Definir pontos de configuração e adaptação que evitam alterações desnecessárias do código.
- [ ] **NFR-FL-02** Verificar instalação, substituição de dependências e portabilidade para ambientes suportados.
- [ ] **NFR-FL-03** Documentar escalabilidade horizontal/vertical apenas onde o produto requer.
- [ ] **NFR-FL-04** Testar mudanças planejadas de ambiente e capacidade sem quebra de funcionalidades essenciais.

#### NFR-SA: Segurança contra danos (safety)
- [ ] **NFR-SA-01** Identificar riscos de danos físicos, financeiros, sociais ou a pessoas causados por falhas do produto.
- [ ] **NFR-SA-02** Estabelecer limites seguros, modos de falha previsíveis e controles de contenção.
- [ ] **NFR-SA-03** Avaliar riscos de uso indevido, operações irreversíveis e decisões automatizadas.
- [ ] **NFR-SA-04** Exigir revisão especializada em contextos médicos, industriais, automotivos ou de risco elevado.

### 2. NIST Cybersecurity Framework 2.0: seis funções

#### CSF-GV: Governar (GV)
- [ ] **CSF-GV-01** Definir política de segurança, apetite de risco, responsabilidades e prestação de contas.
- [ ] **CSF-GV-02** Mapear obrigações legais, compromissos contratuais e requisitos de stakeholders.
- [ ] **CSF-GV-03** Estabelecer governança de fornecedores, dependências e mudanças de risco.
- [ ] **CSF-GV-04** Revisar efetividade dos controles, decisões e exceções com periodicidade definida.

#### CSF-ID: Identificar (ID)
- [ ] **CSF-ID-01** Inventariar hardware, software, serviços, usuários, dependências e informações críticas.
- [ ] **CSF-ID-02** Mapear processos, fluxos, riscos e superfícies de exposição.
- [ ] **CSF-ID-03** Avaliar criticidade, impacto, vulnerabilidades e ameaças.
- [ ] **CSF-ID-04** Manter registro e revisão periódica de riscos e ativos.

#### CSF-PR: Proteger (PR)
- [ ] **CSF-PR-01** Aplicar identidade, MFA, autorização mínima e gestão de segredos.
- [ ] **CSF-PR-02** Configurar hardening, treinamento e segurança das plataformas.
- [ ] **CSF-PR-03** Proteger dados em repouso, trânsito, backup e descarte.
- [ ] **CSF-PR-04** Reduzir superfícies de ataque por isolamento, segmentação e configurações seguras.

#### CSF-DE: Detectar (DE)
- [ ] **CSF-DE-01** Instrumentar eventos de segurança com logs e métricas pertinentes.
- [ ] **CSF-DE-02** Definir casos de uso de detecção com alertas acionáveis.
- [ ] **CSF-DE-03** Proteger integridade, acesso e retenção dos logs.
- [ ] **CSF-DE-04** Testar detecções e reduzir falsos positivos relevantes.

#### CSF-RS: Responder (RS)
- [ ] **CSF-RS-01** Definir severidade, responsáveis, comunicação e procedimentos de resposta.
- [ ] **CSF-RS-02** Preparar isolamento, revogação de credenciais e contenção de incidentes.
- [ ] **CSF-RS-03** Preservar evidências respeitando privacidade e cadeia de custódia.
- [ ] **CSF-RS-04** Registrar causas, danos, correções e comunicação de incidentes.

#### CSF-RC: Recuperar (RC)
- [ ] **CSF-RC-01** Definir RPO, RTO e prioridades de recuperação.
- [ ] **CSF-RC-02** Manter backups, redundância e planos de reconstrução necessários.
- [ ] **CSF-RC-03** Executar testes periódicos de restauração e continuidade.
- [ ] **CSF-RC-04** Revisar resiliência, lições aprendidas e condições de retorno à operação.

### 3. NIST SP 800-53 Rev. 5: vinte famílias de controles

#### 53-AC: Controle de acesso
- [ ] **53-AC-01** Definir RBAC/ABAC ou modelo apropriado e políticas de acesso por recurso.
- [ ] **53-AC-02** Aplicar menor privilégio, segregação de funções e revisão periódica de permissões.

#### 53-AT: Conscientização e treinamento
- [ ] **53-AT-01** Treinar equipe sobre phishing, engenharia social e tratamento de segredos.
- [ ] **53-AT-02** Registrar treinamento proporcional às funções e riscos.

#### 53-AU: Auditoria e responsabilização
- [ ] **53-AU-01** Definir eventos auditáveis e retenção compatível com riscos e privacidade.
- [ ] **53-AU-02** Proteger logs contra adulteração e restringir sua leitura.

#### 53-CA: Avaliação, autorização e monitoramento
- [ ] **53-CA-01** Manter calendário de revisão e teste dos controles selecionados.
- [ ] **53-CA-02** Registrar falhas, autorizações, exceções e ações corretivas.

#### 53-CM: Gestão de configuração
- [ ] **53-CM-01** Versionar baselines e configurações críticas, incluindo IaC.
- [ ] **53-CM-02** Revisar mudanças, hardening, configurações-padrão e configuração drift.

#### 53-CP: Planejamento de contingência
- [ ] **53-CP-01** Definir cenários de interrupção, RPO/RTO e plano de continuidade.
- [ ] **53-CP-02** Testar restauração e capacidade de recuperação com dados representativos.

#### 53-IA: Identificação e autenticação
- [ ] **53-IA-01** Usar identidades individuais, MFA e autenticação apropriada ao risco.
- [ ] **53-IA-02** Proteger autenticadores, sessões, dispositivos e mecanismos de recuperação.

#### 53-IR: Resposta a incidentes
- [ ] **53-IR-01** Criar playbooks para vazamento, ransomware, perda de chaves e comprometimento de contas.
- [ ] **53-IR-02** Realizar exercícios e registrar lições aprendidas.

#### 53-MA: Manutenção
- [ ] **53-MA-01** Planejar atualizações, correções de vulnerabilidades e mudanças controladas.
- [ ] **53-MA-02** Restringir acesso de manutenção e registrar atividades críticas.

#### 53-MP: Proteção de mídia
- [ ] **53-MP-01** Criptografar e proteger mídias e backups com dados relevantes.
- [ ] **53-MP-02** Aplicar retenção e descarte seguro de dispositivos e arquivos.

#### 53-PE: Proteção física e ambiental
- [ ] **53-PE-01** Proteger equipamentos e dispositivos com chaves e dados sensíveis.
- [ ] **53-PE-02** Avaliar energia, incêndio, acesso físico e contingências quando houver infraestrutura própria.

#### 53-PL: Planejamento
- [ ] **53-PL-01** Definir plano de segurança e responsabilidade por sistemas e dados.
- [ ] **53-PL-02** Revisar o plano com mudanças de escopo e ameaças.

#### 53-PM: Gestão do programa
- [ ] **53-PM-01** Definir estratégia de risco e responsabilidades institucionais.
- [ ] **53-PM-02** Medir maturidade, prioridades e eficácia dos controles de segurança.

#### 53-PS: Segurança de pessoal
- [ ] **53-PS-01** Definir acesso no ingresso, mudança de função e desligamento.
- [ ] **53-PS-02** Orientar colaboradores e terceiros quanto a confidencialidade e responsabilidades.

#### 53-PT: Tratamento e transparência de dados pessoais
- [ ] **53-PT-01** Documentar base, finalidade, minimização, retenção e acesso a dados pessoais.
- [ ] **53-PT-02** Oferecer transparência e mecanismos de exercício de direitos quando aplicáveis.

#### 53-RA: Avaliação de risco
- [ ] **53-RA-01** Avaliar ameaças, probabilidade, impacto e vulnerabilidades.
- [ ] **53-RA-02** Registrar risco residual, exceções, responsáveis e reavaliação.

#### 53-SA: Aquisição de sistemas e serviços
- [ ] **53-SA-01** Definir critérios de segurança em aquisições, integrações e desenvolvimento.
- [ ] **53-SA-02** Avaliar riscos de bibliotecas, fornecedores, produtos e serviços externos.

#### 53-SC: Proteção de sistemas e comunicações
- [ ] **53-SC-01** Aplicar TLS, segmentação, isolamento e proteção de fronteiras de confiança.
- [ ] **53-SC-02** Proteger integridade e confidencialidade nos canais e nos dados.

#### 53-SI: Integridade de sistemas e informações
- [ ] **53-SI-01** Monitorar atualizações, malware, vulnerabilidades e eventos anormais.
- [ ] **53-SI-02** Testar integridade de dados, artefatos e dependências.

#### 53-SR: Gestão de risco da cadeia de suprimentos
- [ ] **53-SR-01** Inventariar componentes e verificar procedência, licenças e vulnerabilidades.
- [ ] **53-SR-02** Aplicar pinning, SBOM, revisão de releases e critérios de fornecedores.

### 4. NIST SSDF: desenvolvimento seguro e proteção da supply chain

#### SSDF-PO: Preparar a organização
- [ ] **SSDF-PO-01** Definir objetivos e requisitos de segurança no SDLC.
- [ ] **SSDF-PO-02** Criar política de ferramentas, formação e governança de desenvolvimento seguro.
- [ ] **SSDF-PO-03** Estabelecer ambientes de build e teste protegidos.
- [ ] **SSDF-PO-04** Estabelecer rastreabilidade entre riscos, regras, testes e evidências.

#### SSDF-PS: Proteger o software
- [ ] **SSDF-PS-01** Restringir acesso a código, pipelines e artefatos.
- [ ] **SSDF-PS-02** Proteger integridade de fontes, dependências e ambientes de build.
- [ ] **SSDF-PS-03** Verificar procedência, assinaturas e atestações quando apropriadas.
- [ ] **SSDF-PS-04** Controlar releases e impedir substituição não autorizada de artefatos.

#### SSDF-PW: Produzir software bem protegido
- [ ] **SSDF-PW-01** Realizar threat modeling de componentes e alterações críticas.
- [ ] **SSDF-PW-02** Adotar padrões seguros e testar casos de abuso.
- [ ] **SSDF-PW-03** Executar análises estáticas, composição de dependências e revisão de código.
- [ ] **SSDF-PW-04** Aplicar verificação de requisitos de segurança e testes de regressão.

#### SSDF-RV: Responder às vulnerabilidades
- [ ] **SSDF-RV-01** Oferecer canal privado e responsável de reporte de vulnerabilidades.
- [ ] **SSDF-RV-02** Realizar triagem, priorização, remediação e avisos coordenados.
- [ ] **SSDF-RV-03** Investigar causa raiz e padrões recorrentes.
- [ ] **SSDF-RV-04** Revisar testes e controles para evitar reincidência.

### 5. Normas ISO/IEC/IEEE: desdobramento operacional por assunto

#### ISO-27001: Gestão de segurança da informação
- [ ] **ISO-27001-01** Definir escopo, política, objetivos e governança de segurança.
- [ ] **ISO-27001-02** Manter avaliação e tratamento de riscos, incluindo decisões e justificativas.
- [ ] **ISO-27001-03** Definir Statement of Applicability quando houver implantação formal de SGSI.
- [ ] **ISO-27001-04** Medir eficácia, conduzir análises críticas e corrigir não conformidades.

#### ISO-27002: Controles organizacionais, pessoas, físicos e tecnológicos
- [ ] **ISO-27002-01** Estabelecer controles organizacionais para políticas, ativos, fornecedores e incidentes.
- [ ] **ISO-27002-02** Definir controles relativos a pessoas, capacitação e responsabilidades.
- [ ] **ISO-27002-03** Proteger ambientes físicos, equipamentos e mídias.
- [ ] **ISO-27002-04** Aplicar hardening, proteção de dados, gestão de credenciais, monitoramento e segurança de comunicações.

#### ISO-27005: Risco de segurança da informação
- [ ] **ISO-27005-01** Definir critérios de risco, impacto e probabilidade.
- [ ] **ISO-27005-02** Identificar, analisar e avaliar cenários de risco.
- [ ] **ISO-27005-03** Selecionar tratamento, responsável e aceitação de risco residual.

#### ISO-27701: Gestão de privacidade
- [ ] **ISO-27701-01** Inventariar dados pessoais, papéis e finalidades.
- [ ] **ISO-27701-02** Implementar minimização, retenção, transparência e direitos de titulares.
- [ ] **ISO-27701-03** Documentar avaliação de risco de privacidade, incidentes e gestão de terceiros.

#### ISO-27017: Segurança de serviços cloud
- [ ] **ISO-27017-01** Definir responsabilidade compartilhada entre cliente e provedor cloud.
- [ ] **ISO-27017-02** Restringir acesso a consoles, redes, storage e credenciais cloud.
- [ ] **ISO-27017-03** Revisar isolamento de tenants, configuração e descarte de recursos.

#### ISO-27018: Proteção de dados pessoais em cloud
- [ ] **ISO-27018-01** Avaliar obrigações de provedores sobre tratamento de dados pessoais.
- [ ] **ISO-27018-02** Restringir uso, acesso e divulgação de dados pessoais conforme contratos e lei.
- [ ] **ISO-27018-03** Validar descarte, localização, subprocessadores e gestão de incidentes.

#### ISO-20000: Gestão de serviços de TI
- [ ] **ISO-20000-01** Manter catálogo de serviços, responsabilidades e acordos.
- [ ] **ISO-20000-02** Definir incidentes, problemas, mudanças, release e disponibilidade.
- [ ] **ISO-20000-03** Medir nível de serviço e estabelecer melhoria contínua.

#### ISO-9001: Gestão da qualidade
- [ ] **ISO-9001-01** Estabelecer objetivos de qualidade e expectativas de stakeholders.
- [ ] **ISO-9001-02** Definir processos, papéis, registros e gestão de mudanças.
- [ ] **ISO-9001-03** Medir satisfação, desempenho, não conformidades e melhoria contínua.
- [ ] **ISO-9001-04** Considerar riscos, oportunidades, liderança e cultura da qualidade.

#### ISO-90003: Qualidade aplicada a software
- [ ] **ISO-90003-01** Adaptar gestão de qualidade à especificação, desenvolvimento e manutenção.
- [ ] **ISO-90003-02** Manter processo verificável de revisão e entrega.
- [ ] **ISO-90003-03** Documentar critérios de controle de configuração e de testes.

#### ISO-12207: Ciclo de vida do software
- [ ] **ISO-12207-01** Definir atividades e responsabilidades de aquisição, desenvolvimento, entrega e operação.
- [ ] **ISO-12207-02** Planejar sustentação, manutenção, suporte e retirada do produto.
- [ ] **ISO-12207-03** Registrar resultados e evidências suficientes a cada etapa.
- [ ] **ISO-12207-04** Adaptar processo ao porte e contexto sem impor metodologia ágil ou cascata.

#### ISO-29148: Engenharia de requisitos
- [ ] **ISO-29148-01** Identificar interessados, necessidades, restrições e objetivos.
- [ ] **ISO-29148-02** Especificar requisitos funcionais e não funcionais claros e verificáveis.
- [ ] **ISO-29148-03** Garantir rastreabilidade, gestão de mudanças e validação de requisitos.
- [ ] **ISO-29148-04** Definir critérios de aceitação e prioridades por risco e valor.

#### ISO-42010: Descrição de arquitetura
- [ ] **ISO-42010-01** Identificar stakeholders e preocupações arquiteturais relevantes.
- [ ] **ISO-42010-02** Manter visões apropriadas de componentes, dados, implantação e segurança.
- [ ] **ISO-42010-03** Registrar decisões, opções, restrições, trade-offs e justificativas.
- [ ] **ISO-42010-04** Verificar consistência das visões e atualizar após mudanças materiais.

#### ISO-29119: Testes de software
- [ ] **ISO-29119-01** Definir estratégia, técnicas e níveis de teste conforme risco.
- [ ] **ISO-29119-02** Documentar casos, dados e oráculos de teste, além de resultados.
- [ ] **ISO-29119-03** Registrar defeitos, severidade, reprodução e regressão.
- [ ] **ISO-29119-04** Verificar requisitos não funcionais com testes específicos.

#### ISO-5055: Qualidade estrutural
- [ ] **ISO-5055-01** Investigar defeitos estruturais relevantes para confiabilidade, segurança e manutenibilidade.
- [ ] **ISO-5055-02** Acompanhar métricas estruturalmente úteis sem presumir equivalência entre lint e a medida da norma.
- [ ] **ISO-5055-03** Priorizar problemas pela exposição, impacto e tendência.

#### ISO-38500: Governança de TI
- [ ] **ISO-38500-01** Definir quem avalia, direciona e monitora decisões tecnológicas.
- [ ] **ISO-38500-02** Atribuir responsabilidades e prestar contas sobre gastos, riscos e desempenho.
- [ ] **ISO-38500-03** Relacionar decisões de TI aos resultados e necessidades do projeto.

#### ISO-31000: Gestão de riscos geral
- [ ] **ISO-31000-01** Manter critérios transparentes para avaliar riscos.
- [ ] **ISO-31000-02** Incorporar risco ao planejamento e à tomada de decisões.
- [ ] **ISO-31000-03** Revisar a efetividade de tratamentos e riscos residuais.

#### ISO-42001: Sistema de gestão de IA
- [ ] **ISO-42001-01** Inventariar sistemas e usos de IA por finalidade, responsáveis e dados.
- [ ] **ISO-42001-02** Definir governança de IA, políticas, decisões e avaliação de riscos.
- [ ] **ISO-42001-03** Monitorar resultados, desempenho, impactos, incidentes e melhorias.
- [ ] **ISO-42001-04** Definir controle humano para decisões sensíveis.

#### ISO-42005: Avaliação de impacto de IA
- [ ] **ISO-42005-01** Avaliar como sistemas de IA podem afetar pessoas, direitos e oportunidades.
- [ ] **ISO-42005-02** Identificar grupos afetados, danos potenciais e salvaguardas.
- [ ] **ISO-42005-03** Documentar mitigação, monitoramento e reavaliação de impactos.

#### ISO-23894: Riscos de IA
- [ ] **ISO-23894-01** Avaliar vieses, robustez, privacidade, uso indevido e falhas de IA.
- [ ] **ISO-23894-02** Selecionar e testar mitigação e monitoramento apropriados.
- [ ] **ISO-23894-03** Registrar risco residual e responsáveis por revisões.

#### ISO-5259: Qualidade de dados para IA
- [ ] **ISO-5259-01** Verificar origem, autorização de uso, representatividade e qualidade de datasets.
- [ ] **ISO-5259-02** Medir incompletude, inconsistência, desbalanceamento e drift.
- [ ] **ISO-5259-03** Manter versionamento e documentação do pipeline de dados.

#### ISO-25012: Qualidade de dados
- [ ] **ISO-25012-01** Definir atributos de qualidade de dados relevantes ao sistema.
- [ ] **ISO-25012-02** Validar correção, completude, consistência e atualidade.
- [ ] **ISO-25012-03** Documentar linhagem e mecanismos de correção.

#### ISO-330: Avaliação da capacidade de processos
- [ ] **ISO-330-01** Definir processos críticos e evidências de capacidade.
- [ ] **ISO-330-02** Avaliar execução, estabilidade e pontos de melhoria.
- [ ] **ISO-330-03** Evitar declarar nível de maturidade sem metodologia e avaliação apropriadas.

#### ISO-24183: Terminologia em comunicação técnica
- [ ] **ISO-24183-01** Manter glossário de termos técnicos utilizados no projeto.
- [ ] **ISO-24183-02** Usar terminologia coerente na interface, documentação e suporte.
- [ ] **ISO-24183-03** Revisar linguagem com usuários representativos.

#### ISO-IEC-19770: Gestão de ativos de software
- [ ] **ISO-IEC-19770-01** Manter inventário de componentes e respectivas licenças.
- [ ] **ISO-IEC-19770-02** Relacionar versão, proprietário, localização, suporte e estado.
- [ ] **ISO-IEC-19770-03** Revisar uso, renovação e obsolescência de ativos.

### 6. Referências complementares e setoriais: decidir aplicabilidade

#### REF-UX: Usabilidade e comunicação
- [ ] **REF-UX-01** Planejar testes de usabilidade com objetivos e participantes adequados.
- [ ] **REF-UX-02** Reportar metodologia, contexto e achados de avaliações de experiência.
- [ ] **REF-UX-03** Verificar edição/status antes de usar formatos retirados como referência formal.

#### REF-DOC: Documentação e ciclo de vida
- [ ] **REF-DOC-01** Definir documentos necessários para operação, manutenção e transferência de conhecimento.
- [ ] **REF-DOC-02** Definir manutenção corretiva, adaptativa, perfectiva e preventiva.
- [ ] **REF-DOC-03** Criar métricas com objetivo claro, unidade, fonte e regra de cálculo.
- [ ] **REF-DOC-04** Adaptar processos e artefatos à dimensão da equipe.

#### REF-MODEL: Modelagem
- [ ] **REF-MODEL-01** Adotar diagramas somente quando reduzirem ambiguidades.
- [ ] **REF-MODEL-02** Usar notação correta e manter modelos atualizados com o sistema.
- [ ] **REF-MODEL-03** Explicar decisões por texto e exemplos quando diagramas não bastarem.

#### REF-SEC: Outros referenciais de segurança
- [ ] **REF-SEC-01** Definir segurança de aplicações ao longo do desenvolvimento.
- [ ] **REF-SEC-02** Planejar tratamento de incidentes, aquisição e riscos de fornecedores.
- [ ] **REF-SEC-03** Não alegar certificação de produto com base em simples uso de controles.

#### REF-CLOUD: Cloud e IoT
- [ ] **REF-CLOUD-01** Definir fronteiras e responsabilidades dos serviços cloud.
- [ ] **REF-CLOUD-02** Avaliar identidade, atualização e proteção de dispositivos IoT, quando existirem.
- [ ] **REF-CLOUD-03** Usar referências históricas somente com aviso de substituição ou status.

#### REF-AI: Vocabulário, ciclo de vida e governança de IA
- [ ] **REF-AI-01** Documentar componentes e papéis de IA e ML.
- [ ] **REF-AI-02** Definir processos para treinamento, avaliação, publicação, monitoramento e retirada de modelos.
- [ ] **REF-AI-03** Definir responsabilidades pela governança de dados e sistemas de IA.

#### REF-PCI: Pagamentos e dados de cartão
- [ ] **REF-PCI-01** Determinar se o projeto armazena, processa ou transmite dados de titulares de cartões.
- [ ] **REF-PCI-02** Delimitar cardholder data environment e controles efetivamente aplicáveis.
- [ ] **REF-PCI-03** Avaliar os doze grupos de requisitos e evidências se PCI DSS for aplicável.

#### REF-SECTOR: Setores críticos
- [ ] **REF-SECTOR-01** Identificar requisitos regulatórios e certificações do domínio antes de desenvolver sistemas críticos.
- [ ] **REF-SECTOR-02** Revisar procedimentos formais de hazard analysis, segurança funcional, rastreabilidade e validação quando aplicáveis.
- [ ] **REF-SECTOR-03** Consultar normas e especialistas setoriais, não substituir processos de safety por testes de software comuns.

### 7. NIST especializado: identidade, chaves, Zero Trust e processos

#### NIST-63: Identidade e autenticação
- [ ] **NIST-63-01** Avaliar o nível de garantia de autenticação necessário ao risco.
- [ ] **NIST-63-02** Preferir autenticação criptográfica resistente a phishing para contas críticas.
- [ ] **NIST-63-03** Proteger vínculo, recuperação, substituição e revogação de autenticadores.
- [ ] **NIST-63-04** Usar tokens FIDO2/passkeys ou outra tecnologia com propriedades equivalentes quando adequado.
- [ ] **NIST-63-05** Diferenciar MFA genérica de resistência a phishing.

#### NIST-57: Gestão de chaves criptográficas
- [ ] **NIST-57-01** Inventariar chaves, certificados, trust anchors e responsáveis.
- [ ] **NIST-57-02** Separar criação, distribuição, uso, rotação, backup e destruição de chaves.
- [ ] **NIST-57-03** Preferir hardware seguro para chaves sensíveis, conforme ameaça e disponibilidade.
- [ ] **NIST-57-04** Evitar expor chaves privadas em logs, repositórios e backups sem proteção.
- [ ] **NIST-57-05** Testar revogação e recuperação, incluindo casos de perda de dispositivo.

#### NIST-207: Arquitetura Zero Trust
- [ ] **NIST-207-01** Não confiar automaticamente em identidades por localização de rede.
- [ ] **NIST-207-02** Autenticar e autorizar acesso por recurso e contexto.
- [ ] **NIST-207-03** Aplicar menor privilégio, monitoração e segmentação pertinentes.
- [ ] **NIST-207-04** Reavaliar acesso e condições durante mudanças de risco.

### 8. Matriz de evidências e gestão contínua
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

## 19. Pré-implantação, production readiness e operação contínua

**Checklist prático com 214 controles e classificação de prioridade**: [guia de production readiness, Go/No-Go, comandos de verificação, evidências e rotinas pós-implantação](docs/production-readiness-and-operations.md).

**P0** = bloqueador antes de publicar, se aplicável; **P1** = fortemente recomendado e sujeito a planejamento/riscos; **P2** = aprimoramento opcional. O status real depende de evidência verificada, e itens inaplicáveis devem ter justificativa. Este sistema de prioridades é **uma política editorial de boas práticas**, não uma obrigação universal imposta por NIST ou ISO.

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

## 20. CI/CD, supply chain, reprodutibilidade, aleatoriedade, probes, migrações e workers

**Guia:** [entrega segura, minimum release age, Socket.dev, builds reproduzíveis, CSPRNG, probes e processamento assíncrono](docs/secure-delivery-and-background-processing.md).

**P0:** critério de bloqueio quando aplicável. **P1:** recomendação forte. **P2:** controle avançado. A equipe deve saber explicar a diferença entre Continuous Integration, Continuous Delivery e Continuous Deployment, não apenas repetir nomes de pipelines.

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


## 21. API, OWASP ASVS, SAMM, OpenSSF, resiliência e monitoramento

Esta seção é um subconjunto do [guia detalhado](docs/contracts-assurance-resilience.md) e do [catálogo estruturado](catalog/). Cada controle informa prioridade condicional à aplicabilidade, como verificar e qual evidência apresentar. IDs são próprios do Good Practices, não de cláusulas normativas. **P0** = gate quando aplicável, **P1** = recomendado, **P2** = avançado.

### Contratos de API, compatibilidade e integrações

- [ ] **API-01 [P0]** Versionar contratos OpenAPI, AsyncAPI ou esquema equivalente para interfaces públicas. **Verificar:** Comparar contratos publicados com endpoints e eventos reais. **Evidência:** Contrato versionado e teste de contrato aprovado.
- [ ] **API-02 [P0]** Detectar mudanças incompatíveis em schemas, headers, parâmetros, códigos e eventos. **Verificar:** Executar diff semântico na PR. **Evidência:** Relatório de breaking changes e decisão.
- [ ] **API-03 [P0]** Testar compatibilidade de frontend, backend, SDKs, workers e consumidores legados. **Verificar:** Rodar matriz de versões suportadas. **Evidência:** Matriz de testes de integração.
- [ ] **API-04 [P0]** Testar falhas e respostas de contratos de autenticação e autorização. **Verificar:** Executar contratos com perfis distintos. **Evidência:** Relatório de negativas e permissões.
- [ ] **API-05 [P1]** Criar testes orientados por contrato para consumidores e provedores. **Verificar:** Executar Pact ou verificações de schema equivalentes. **Evidência:** Pipeline e artefatos versionados.
- [ ] **API-06 [P1]** Documentar janelas de suporte, depreciação e política de breaking changes. **Verificar:** Validar changelog, versões e anúncios. **Evidência:** Política e histórico de releases.
- [ ] **API-07 [P1]** Definir semântica e padronização de códigos de erro sem vazar detalhes internos. **Verificar:** Testar casos normais, erro e timeout. **Evidência:** Coleção de contratos e testes.
- [ ] **API-08 [P1]** Testar idempotência de POSTs/commands que podem sofrer retry. **Verificar:** Repetir chamadas concorrentes com mesma chave. **Evidência:** Teste de idempotência.
- [ ] **API-09 [P1]** Definir timeout, circuit breaking, retry com jitter e orçamento fim a fim. **Verificar:** Injetar latência e falhas de dependência. **Evidência:** Teste de resiliência e tracing.
- [ ] **API-10 [P1]** Versionar eventos e tratar consumidores desconhecidos, campos opcionais e mensagens antigas. **Verificar:** Reproduzir mensagens de versões anteriores. **Evidência:** Fixtures e resultado.
- [ ] **API-11 [P1]** Publicar exemplos reproduzíveis e schemas de erros em API docs. **Verificar:** Validar exemplos automaticamente contra schema. **Evidência:** Build de documentação validado.
- [ ] **API-12 [P1]** Impedir introdução de campos sensíveis em payloads ou logs sem revisão de privacidade. **Verificar:** Inspecionar diff de schemas e sample payloads. **Evidência:** Revisão de dados registrada.
### Controles de segurança verificáveis inspirados no OWASP ASVS 5.0

- [ ] **ASVS-01 [P0]** Definir versão do ASVS, escopo e requisitos aplicáveis por criticidade. **Verificar:** Importar catálogo oficial CSV e selecionar IDs oficiais. **Evidência:** Matriz ASVS com edição e escopo.
- [ ] **ASVS-02 [P0]** Verificar autenticação, recuperação de conta, MFA e política de sessões. **Verificar:** Executar casos positivos e negativos contra produção de teste. **Evidência:** Testes de autenticação assinados.
- [ ] **ASVS-03 [P0]** Verificar autorização no backend por recurso, operação e tenant. **Verificar:** Exercitar IDOR/BOLA, privilégios e acesso cruzado. **Evidência:** Matriz de autorização e testes.
- [ ] **ASVS-04 [P0]** Validar entradas e saídas contra injeção, XSS, SSRF, path traversal e execução indevida. **Verificar:** Testes dinâmicos e negativos por ponto de entrada. **Evidência:** Relatório de validação de entrada.
- [ ] **ASVS-05 [P0]** Verificar segredos, criptografia, TLS, hashes de senha e gestão de tokens. **Verificar:** Revisar configuração e executar casos técnicos. **Evidência:** Checklist de criptografia auditado.
- [ ] **ASVS-06 [P0]** Verificar arquitetura de fronteiras de confiança, interfaces e permissões entre serviços. **Verificar:** Revisão de arquitetura por threat model. **Evidência:** Diagrama e decisões revisadas.
- [ ] **ASVS-07 [P1]** Verificar cabeçalhos HTTP, CSP, caches, cookies, CORS e isolamento de conteúdo. **Verificar:** Inspeção automatizada e teste funcional. **Evidência:** Resultados de testes de headers.
- [ ] **ASVS-08 [P1]** Verificar mensagens de erro, logs, monitoramento e ausência de dados sensíveis. **Verificar:** Injetar erros e inspecionar registros redigidos. **Evidência:** Log sanitizado e relatório.
- [ ] **ASVS-09 [P1]** Testar operações de upload, download e processamento de arquivos não confiáveis. **Verificar:** Usar corpus de testes de tipo/tamanho/paths. **Evidência:** Testes de upload com falhas esperadas.
- [ ] **ASVS-10 [P1]** Revisar configurações padrão, endpoints administrativos e hardening de deploy. **Verificar:** Executar scan de superfície e configuração. **Evidência:** Relatório de hardening.
- [ ] **ASVS-11 [P1]** Executar testes de segurança no CI que correspondam a controles ASVS selecionados. **Verificar:** Relacionar IDs do ASVS a testes executáveis. **Evidência:** Matriz requisito → teste → evidência.
- [ ] **ASVS-12 [P1]** Manter um registro do que não foi testado, dos falsos positivos e dos riscos residuais. **Verificar:** Revisar exceções antes de release. **Evidência:** Registro de risco e aprovações.
- [ ] **ASVS-13 [P1]** Revisar licenças e obrigações de atribuição do próprio ASVS ao reutilizar materiais. **Verificar:** Verificar licença e atribuição da fonte. **Evidência:** Lista de referências e avisos.
- [ ] **ASVS-14 [P2]** Planejar avaliação de segurança independente para aplicações de alto risco. **Verificar:** Realizar revisão independente de escopo. **Evidência:** Relatório com remediação.
### Maturidade de segurança com OWASP SAMM

- [ ] **SAMM-01 [P1]** Avaliar Strategy & Metrics, Policy & Compliance e Education & Guidance. **Verificar:** Aplicar autoavaliação SAMM de governança. **Evidência:** Matriz de maturidade e plano.
- [ ] **SAMM-02 [P1]** Avaliar Threat Assessment, Security Requirements e Secure Architecture. **Verificar:** Revisar desenho e requisitos de segurança. **Evidência:** Relatório SAMM Design.
- [ ] **SAMM-03 [P1]** Avaliar Secure Build, Secure Deployment e Defect Management. **Verificar:** Inspecionar pipeline, releases e correção de defeitos. **Evidência:** Evidências de implementação.
- [ ] **SAMM-04 [P1]** Avaliar Architecture Assessment, Requirements-driven Testing e Security Testing. **Verificar:** Confrontar controles com testes e arquitetura. **Evidência:** Evidências de verificação.
- [ ] **SAMM-05 [P1]** Avaliar Incident Management, Environment Management e Operational Management. **Verificar:** Exercitar rotina de operação, incidentes e patches. **Evidência:** Relatório de operações.
- [ ] **SAMM-06 [P1]** Definir nível-alvo de maturidade por domínio, evitando a mesma meta para todos. **Verificar:** Justificar baseline em análise de risco. **Evidência:** Objetivos de maturidade.
- [ ] **SAMM-07 [P1]** Definir responsáveis, orçamento e revisão periódica dos planos de melhoria. **Verificar:** Revisar tarefas, prazos e resultados. **Evidência:** Backlog de melhoria.
- [ ] **SAMM-08 [P1]** Medir resultado e sustentabilidade do processo, não apenas presença de ferramentas. **Verificar:** Comparar evidência de execução recorrente. **Evidência:** Métricas e retrospectiva.
- [ ] **SAMM-09 [P2]** Realizar reavaliação independente de práticas mais críticas. **Verificar:** Comparar autoavaliação com avaliação externa. **Evidência:** Relatório independente.
### OpenSSF Best Practices Badge e governança open source

- [ ] **OSF-01 [P1]** Comparar projeto elegível aos critérios OpenSSF Baseline e Best Practices Badge. **Verificar:** Preencher autoavaliação com links de evidências. **Evidência:** Matriz de critérios.
- [ ] **OSF-02 [P1]** Distinguir OpenSSF Scorecard, OpenSSF Baseline e Best Practices Badge. **Verificar:** Conferir o objetivo, método e cobertura de cada avaliação. **Evidência:** Documentação de comparação.
- [ ] **OSF-03 [P1]** Avaliar progressão Passing → Silver → Gold somente para projetos adequados. **Verificar:** Verificar critérios por nível e capacidade de manutenção. **Evidência:** Plano de progresso.
- [ ] **OSF-04 [P1]** Documentar contribuição, governança, reporte de bugs, política de vulnerabilidades e suporte. **Verificar:** Verificar arquivos e canais públicos. **Evidência:** Links para documentos.
- [ ] **OSF-05 [P1]** Documentar manutenção, releases, práticas de teste e controle de mudanças. **Verificar:** Executar release de teste e revisar processos. **Evidência:** Histórico de release.
- [ ] **OSF-06 [P1]** Revisar bus factor, sucessão e diversidade de mantenedores para reduzir risco de abandono. **Verificar:** Simular ausência do mantenedor. **Evidência:** Plano de continuidade.
- [ ] **OSF-07 [P1]** Declarar status real das badges; não exibir badge como certificação independente automática. **Verificar:** Validar link e critérios reportados. **Evidência:** URL pública verificável.
- [ ] **OSF-08 [P2]** Submeter o projeto a programa de badge somente após evidências suficientes. **Verificar:** Preencher avaliação oficial quando elegível. **Evidência:** Link do formulário de avaliação.
### Resiliência, falhas e operações degradadas

- [ ] **RES-01 [P0]** Definir comportamento seguro quando banco, DNS, rede, cache e provedores externos falharem. **Verificar:** Desconectar dependência em staging autorizado. **Evidência:** Teste de falha e logs.
- [ ] **RES-02 [P0]** Garantir que retries não dupliquem pagamentos, mensagens ou mutações irreversíveis. **Verificar:** Repetir falhas no meio da transação. **Evidência:** Teste de idempotência.
- [ ] **RES-03 [P0]** Definir limite de concorrência, timeout, fila e política de sobrecarga. **Verificar:** Executar teste de saturação e backlog. **Evidência:** Métricas de sobrecarga.
- [ ] **RES-04 [P1]** Simular queda de banco, lentidão de queries, pool exaurido e deadlocks. **Verificar:** Usar fault injection isolada. **Evidência:** Relatório de falha de banco.
- [ ] **RES-05 [P1]** Simular interrupção de DNS ou resolução incorreta. **Verificar:** Aplicar DNS fault em ambiente de teste. **Evidência:** Teste com recuperação.
- [ ] **RES-06 [P1]** Simular perda de conectividade entre serviços e comportamento de timeout. **Verificar:** Aplicar fault network no ambiente autorizado. **Evidência:** Trace e relatório.
- [ ] **RES-07 [P1]** Simular parada de filas, workers e brokers, verificando backlog e retomada. **Verificar:** Suspender consumers e publicar mensagens de teste. **Evidência:** Dashboard de filas.
- [ ] **RES-08 [P1]** Simular disco cheio, arquivos temporários lotados e falha de logging. **Verificar:** Limitar volume em staging controlado. **Evidência:** Resultados e alertas.
- [ ] **RES-09 [P1]** Simular falta de memória, CPU e reinícios abruptos de processo. **Verificar:** Aplicar limites e encerrar processos. **Evidência:** Tempo de recuperação.
- [ ] **RES-10 [P1]** Testar implantação com instância indisponível, rollout interrompido e rollback. **Verificar:** Parar instância durante rollout. **Evidência:** Relatório de rollout.
- [ ] **RES-11 [P1]** Validar graceful shutdown, drenagem de conexões e tarefas em voo. **Verificar:** Enviar SIGTERM no processamento. **Evidência:** Teste sem perda de trabalho.
- [ ] **RES-12 [P1]** Verificar circuit breaker, bulkhead e limites de retries para evitar cascata. **Verificar:** Falhar uma dependência comum. **Evidência:** Métrica de impacto no restante.
- [ ] **RES-13 [P1]** Testar cache desatualizado, indisponível ou inconsistente. **Verificar:** Desligar cache e verificar fallback. **Evidência:** Resultado de consistência.
- [ ] **RES-14 [P1]** Testar repetição de processamento com at-least-once delivery. **Verificar:** Reentregar mensagens deliberadamente. **Evidência:** Teste de deduplicação.
- [ ] **RES-15 [P1]** Verificar recuperação após interrupção no meio de backup ou migração. **Verificar:** Interromper operação no laboratório. **Evidência:** Plano de recuperação validado.
- [ ] **RES-16 [P1]** Definir RPO/RTO e medir recuperação observada, não apenas planejada. **Verificar:** Executar exercício cronometrado. **Evidência:** Relatório de RTO/RPO.
- [ ] **RES-17 [P1]** Registrar hipóteses, blast radius e plano de abortar cada experimento. **Verificar:** Revisar game day antes da execução. **Evidência:** Plano de experimento.
- [ ] **RES-18 [P2]** Executar game days controlados e chaos engineering progressivo. **Verificar:** Executar cenário aprovado. **Evidência:** Relatório e melhorias.
- [ ] **RES-19 [P2]** Repetir experimentos após mudança importante de infraestrutura. **Verificar:** Comparar resultados. **Evidência:** Registro de regressão.
### Observabilidade da observabilidade e alertas

- [ ] **OBS-01 [P0]** Verificar disponibilidade do próprio pipeline de monitoramento e entrega de alertas. **Verificar:** Interromper exporter/receptor em teste. **Evidência:** Alerta externo recebido.
- [ ] **OBS-02 [P0]** Definir quem recebe alertas, quem substitui o responsável e como escalar. **Verificar:** Executar exercício de notificação. **Evidência:** Registro de recebimento.
- [ ] **OBS-03 [P0]** Testar se falha de logs, métricas ou alertmanager é detectada por canal independente. **Verificar:** Derrubar componente de observabilidade em teste. **Evidência:** Alerta out-of-band.
- [ ] **OBS-04 [P1]** Definir SLIs por jornada crítica e SLOs verificáveis por janela. **Verificar:** Confrontar métricas com usuários sintéticos. **Evidência:** Dashboard SLO.
- [ ] **OBS-05 [P1]** Configurar alertas multiwindow/multi-burn-rate de consumo do error budget quando há volume suficiente. **Verificar:** Simular erro sustentado e spikes. **Evidência:** Regra e firing test.
- [ ] **OBS-06 [P1]** Calibrar alertas para baixo tráfego, evitando alarmes erráticos por amostras raras. **Verificar:** Simular janelas com poucas requisições. **Evidência:** Teste de baixa amostragem.
- [ ] **OBS-07 [P1]** Evitar tempestade de alertas com agrupamento, deduplicação, silenciamento e inibição. **Verificar:** Provocar falhas correlacionadas em teste. **Evidência:** Histórico de alertas.
- [ ] **OBS-08 [P1]** Associar runbook, impacto e painel a cada alerta acionável. **Verificar:** Abrir links a partir do alerta. **Evidência:** Runbook vinculado.
- [ ] **OBS-09 [P1]** Testar ausência de métricas (no data) separadamente de métricas normais. **Verificar:** Remover série/expor falha de scrape. **Evidência:** Resultado de ausência de dados.
- [ ] **OBS-10 [P1]** Monitorar atraso de ingestão, cardinalidade excessiva e perda de traces/logs. **Verificar:** Injetar atraso e verificar lacunas. **Evidência:** Dashboards de pipeline.
- [ ] **OBS-11 [P1]** Revisar quem acessa logs e dados pessoais na observabilidade. **Verificar:** Auditar roles e retenção. **Evidência:** Matriz de acesso.
- [ ] **OBS-12 [P1]** Registrar incidentes sem alerta, alarmes falsos e tempo até detecção. **Verificar:** Analisar postmortems. **Evidência:** Relatório de qualidade dos alertas.
- [ ] **OBS-13 [P1]** Verificar heartbeat ou dead man's switch para monitoramento crítico. **Verificar:** Interromper sinal periódico. **Evidência:** Notificação de heartbeat ausente.
- [ ] **OBS-14 [P2]** Aplicar testes sintéticos e RUM combinados para validar perspectiva do usuário. **Verificar:** Comparar sintéticos e sinais reais. **Evidência:** Análise de divergência.

## 22. FinOps, domínios, e-mail, descomissionamento e portabilidade

Esta seção é um subconjunto do [guia detalhado](docs/finops-domains-retirement-portability.md) e do [catálogo estruturado](catalog/). Cada controle informa prioridade condicional à aplicabilidade, como verificar e qual evidência apresentar. IDs são próprios do Good Practices, não de cláusulas normativas. **P0** = gate quando aplicável, **P1** = recomendado, **P2** = avançado.

### Custos, quotas e FinOps / segurança econômica

- [ ] **FIN-01 [P0]** Identificar todos os provedores que podem gerar despesa por requisição, consumo ou transferência. **Verificar:** Mapear fatura, plano e endpoints cobrados. **Evidência:** Inventário de provedores e preços.
- [ ] **FIN-02 [P0]** Definir orçamentos de produção e alertas de consumo para serviços com cobrança variável. **Verificar:** Simular alerta de custo seguro. **Evidência:** Alerta recebido.
- [ ] **FIN-03 [P0]** Limitar operações que permitem consumo descontrolado de APIs pagas. **Verificar:** Testar cotas por usuário/tenant/chave. **Evidência:** Teste de abuso e quotas.
- [ ] **FIN-04 [P0]** Proteger chaves e credenciais de billing e APIs de alto custo contra acesso de clientes. **Verificar:** Inspecionar frontend, permissões e segredos. **Evidência:** Relatório de segurança de credenciais.
- [ ] **FIN-05 [P1]** Definir owner, centro de custo, tags de ambiente e política de contabilização. **Verificar:** Conferir tags e orçamento por serviço. **Evidência:** Dashboard com responsabilidades.
- [ ] **FIN-06 [P1]** Configurar quotas, budget alerts, throttling e hard limits quando o provedor suportar. **Verificar:** Simular pico controlado de uso. **Evidência:** Registro de limite disparado.
- [ ] **FIN-07 [P1]** Criar alertas de anomalia de custo para variações de uso e cobranças. **Verificar:** Verificar cobertura em provedor e teste controlado. **Evidência:** Regra e histórico de alerta.
- [ ] **FIN-08 [P1]** Medir custo por requisição, tenant, job, build, modelo de IA ou funcionalidade. **Verificar:** Analisar tracing e fatura por dimensões. **Evidência:** Relatório de unit economics.
- [ ] **FIN-09 [P1]** Limitar concorrência, payload, número de itens e profundidade de consultas pagas. **Verificar:** Executar carga por tenant dentro de limites. **Evidência:** Relatório de stress econômico.
- [ ] **FIN-10 [P1]** Evitar loops e retries infinitos em tarefas faturáveis, incluindo alertas sobre repetição. **Verificar:** Injetar falhas de fornecedor e contar chamadas. **Evidência:** Teste de retry com custos.
- [ ] **FIN-11 [P1]** Planejar reservas, instâncias, storage, retenção de logs e egress para evitar desperdício. **Verificar:** Revisar custos antes/depois da otimização. **Evidência:** Relatório FinOps.
- [ ] **FIN-12 [P1]** Definir orçamento e alertas de recursos criados em ambientes temporários/preview. **Verificar:** Criar e destruir ambiente em ensaio. **Evidência:** Inventário de recursos órfãos.
- [ ] **FIN-13 [P1]** Monitorar custos de observabilidade: cardinalidade, retenção, sampling e volume de logs. **Verificar:** Comparar custo/volume de ingestão. **Evidência:** Métricas e relatório de retenção.
- [ ] **FIN-14 [P1]** Documentar comportamento diante de esgotamento de créditos, quotas ou budget. **Verificar:** Simular limite de provedor/staging. **Evidência:** Teste de degradação econômica.
- [ ] **FIN-15 [P2]** Comparar provedores e cenários de custos para crescimento 10x ou 100x. **Verificar:** Modelar TCO e curva de utilização. **Evidência:** Planilha de cenários.
### Domínios, DNS, HTTPS e e-mail confiável

- [ ] **DNS-01 [P0]** Proteger conta de registrador DNS e provedores de zona com MFA resistente a phishing quando suportado. **Verificar:** Revisar contas, tokens e papéis. **Evidência:** Revisão de identidade do registrador.
- [ ] **DNS-02 [P0]** Definir owner, renovação e alertas para todos os domínios produtivos. **Verificar:** Consultar expiração e testar notificações. **Evidência:** Inventário e alerta.
- [ ] **DNS-03 [P0]** Verificar que registros públicos A/AAAA/CNAME/MX/TXT não expõem serviços internos por engano. **Verificar:** Fazer inventário e consulta DNS autorizada. **Evidência:** Snapshot redigido da zona.
- [ ] **DNS-04 [P0]** Proteger HTTPS com certificado válido e renovação automatizada ou plano comprovado. **Verificar:** Forçar renovação em ambiente de teste. **Evidência:** Relatório TLS/ACME.
- [ ] **DNS-05 [P1]** Avaliar DNSSEC segundo suporte do registrador e do DNS autoritativo, incluindo rotação de chaves. **Verificar:** Testar cadeia de confiança e plano de rollover. **Evidência:** Relatório de validação DNSSEC.
- [ ] **DNS-06 [P1]** Configurar CAA para limitar autoridades certificadoras autorizadas quando viável. **Verificar:** Consultar CAA e testar emissão legítima. **Evidência:** Configuração CAA.
- [ ] **DNS-07 [P1]** Configurar SPF válido para domínios que enviam e-mail, sem registros excessivos ou permissivos. **Verificar:** Avaliar SPF real dos remetentes. **Evidência:** Resultado de autenticação.
- [ ] **DNS-08 [P1]** Assinar e-mails com DKIM e verificar gerenciamento de seletores e rotação. **Verificar:** Enviar teste e examinar headers. **Evidência:** Cabeçalhos de e-mail de teste.
- [ ] **DNS-09 [P1]** Configurar DMARC e evoluir monitorado de p=none para política de quarentena/rejeição após validar alinhamento. **Verificar:** Analisar relatórios agregados e spoofing. **Evidência:** Política DMARC e análise.
- [ ] **DNS-10 [P1]** Proteger domínio que não envia e-mail com política coerente (SPF e DMARC apropriados). **Verificar:** Verificar tratamento de e-mails forjados. **Evidência:** Registros DNS e teste.
- [ ] **DNS-11 [P1]** Separar subdomínios transacionais, marketing e autenticadores conforme risco e reputação. **Verificar:** Verificar rotas e reputação. **Evidência:** Mapa de fluxo de e-mail.
- [ ] **DNS-12 [P1]** Monitorar emissões CT inesperadas, certificados novos e alterações sensíveis de DNS. **Verificar:** Inspecionar alertas de Certificate Transparency. **Evidência:** Alertas verificados.
- [ ] **DNS-13 [P1]** Avaliar proteção contra domain/subdomain takeover em DNS apontando para serviços extintos. **Verificar:** Encontrar aliases órfãos autorizados. **Evidência:** Inventário de CNAMEs.
- [ ] **DNS-14 [P1]** Usar permissões mínimas para tokens DNS e limitar alcance de automações ACME. **Verificar:** Auditar permissões API de zona. **Evidência:** Matriz de tokens.
- [ ] **DNS-15 [P1]** Testar failover DNS e efeitos de TTL/caching quando há múltiplos endpoints. **Verificar:** Executar ensaio controlado de mudança. **Evidência:** Relatório DNS.
- [ ] **DNS-16 [P1]** Monitorar MX, DKIM, SPF, DMARC e falhas de entrega de e-mail transacional. **Verificar:** Inspecionar bounce e autenticação. **Evidência:** Dashboard de e-mail.
- [ ] **DNS-17 [P2]** Considerar separação de registrador e DNS, lock de domínio e redundância autoritativa em serviços críticos. **Verificar:** Revisar arquitetura de DNS e contingência. **Evidência:** Plano de continuidade.
### Descomissionamento, retirada de sistemas e limpeza de acessos

- [ ] **RET-01 [P0]** Criar processo formal para decidir quando um serviço ou projeto será desativado. **Verificar:** Verificar inventário e aprovação da retirada. **Evidência:** Registro de decisão.
- [ ] **RET-02 [P0]** Inventariar usuários, integrações, APIs, filas, jobs, DNS, webhooks e dependentes antes da retirada. **Verificar:** Pesquisar consumidores reais e proprietários. **Evidência:** Mapa de dependências.
- [ ] **RET-03 [P0]** Revisar obrigações legais de retenção, exclusão e exportação antes de apagar dados. **Verificar:** Validar política e acordos aplicáveis. **Evidência:** Matriz de retenção.
- [ ] **RET-04 [P0]** Revogar tokens, chaves, webhooks, service accounts, deploy keys e credenciais do serviço desativado. **Verificar:** Conferir IAM e secrets manager. **Evidência:** Evidência de revogação.
- [ ] **RET-05 [P0]** Remover exposição externa: DNS, load balancers, ingress, portas, certificados e regras de firewall não usados. **Verificar:** Reescanear perímetro após remoção. **Evidência:** Relatório de superfície reduzida.
- [ ] **RET-06 [P0]** Assegurar entrega, exportação ou descarte seguro de dados, conforme contrato e legislação. **Verificar:** Simular solicitação de recuperação e descarte. **Evidência:** Termo e comprovante de descarte.
- [ ] **RET-07 [P1]** Comunicar depreciação, prazo, alternativas e suporte aos consumidores. **Verificar:** Revisar avisos e cronograma. **Evidência:** Aviso de descontinuação.
- [ ] **RET-08 [P1]** Definir janela de read-only e redirecionamento quando houver clientes ativos. **Verificar:** Executar testes de experiência na retirada. **Evidência:** Plano de migração.
- [ ] **RET-09 [P1]** Desligar cron jobs, pipelines, bots e integrações para evitar gasto ou trabalho órfão. **Verificar:** Revisar agendamentos e últimas execuções. **Evidência:** Lista de jobs encerrados.
- [ ] **RET-10 [P1]** Remover recursos cloud, volumes, registries, snapshots e ambientes efêmeros não retidos. **Verificar:** Comparar inventário antes/depois. **Evidência:** Relatório de recursos destruídos.
- [ ] **RET-11 [P1]** Revisar backups e sua política de expiração, inclusive cópias fora do ambiente. **Verificar:** Auditar backups e políticas de descarte. **Evidência:** Registro de retenção.
- [ ] **RET-12 [P1]** Arquivar documentação e código necessários ao suporte histórico ou auditoria. **Verificar:** Testar acesso de mantenedor ao arquivo. **Evidência:** Link para arquivo.
- [ ] **RET-13 [P1]** Remover permissões e papéis administrativos exclusivos do sistema extinto. **Verificar:** Comparar IAM. **Evidência:** Relatório de privilégios.
- [ ] **RET-14 [P1]** Atualizar status no README, releases, changelog, docs e repositório (archived/deprecated). **Verificar:** Revisar documentação pública. **Evidência:** Links com status atualizado.
- [ ] **RET-15 [P1]** Verificar inexistência de DNS órfão ou subdomain takeover após desligamento. **Verificar:** Executar checagem de aliases públicos. **Evidência:** Resultado de varredura.
- [ ] **RET-16 [P1]** Revisar fatura, telemetria e logs após desligamento para detectar uso residual. **Verificar:** Verificar custo e acessos em janela de observação. **Evidência:** Relatório pós-descomissionamento.
### Portabilidade, custos arquiteturais e vendor lock-in

- [ ] **PORT-01 [P1]** Registrar dependências em nuvem, SaaS, protocolos e formatos proprietários de alto impacto. **Verificar:** Manter inventário de fornecedores e funcionalidades. **Evidência:** Mapa de dependências e contrato.
- [ ] **PORT-02 [P1]** Definir formato de exportação e política de portabilidade dos dados. **Verificar:** Executar export e reimport em ambiente isolado. **Evidência:** Teste de portabilidade.
- [ ] **PORT-03 [P1]** Definir estratégia para substituir provedores críticos de autenticação, filas, object storage e observabilidade. **Verificar:** Simular adaptação de uma integração. **Evidência:** ADR e esforço estimado.
- [ ] **PORT-04 [P1]** Documentar custos de saída (egress), licenciamento, retirada de dados e término de contrato. **Verificar:** Avaliar termos e cenários de troca. **Evidência:** Estimativa de saída.
- [ ] **PORT-05 [P1]** Preferir interfaces estáveis e padrões abertos quando cumprirem requisitos reais. **Verificar:** Comparar soluções por critérios técnicos. **Evidência:** ADR de escolha de protocolo.
- [ ] **PORT-06 [P1]** Separar código de integração de regras de domínio quando essa separação reduzir custo de mudança. **Verificar:** Revisar dependências de componentes. **Evidência:** Diagrama e teste de adaptação.
- [ ] **PORT-07 [P1]** Identificar single points of failure e dependências externas que inviabilizam todo o serviço. **Verificar:** Simular falhas das dependências. **Evidência:** Mapa de impacto.
- [ ] **PORT-08 [P1]** Medir disponibilidade contratual/observada de provedores e plano de contingência. **Verificar:** Confrontar SLAs e incidentes. **Evidência:** Relatório mensal de fornecedor.
- [ ] **PORT-09 [P1]** Definir tratamento de indisponibilidade e rate limit de APIs de terceiros. **Verificar:** Injetar 429/timeout em staging. **Evidência:** Testes de fallback.
- [ ] **PORT-10 [P1]** Avaliar risco de abandono de bibliotecas, extensão e produtos essenciais. **Verificar:** Revisar atividade, CVEs, mantenedores e releases. **Evidência:** Registro de risco tecnológico.
- [ ] **PORT-11 [P1]** Registrar pontos de reversibilidade de decisões arquiteturais e custo de migração. **Verificar:** Revisar ADR após release. **Evidência:** Registro de trade-offs.
- [ ] **PORT-12 [P2]** Executar prova de conceito de portabilidade entre provedores para sistemas críticos. **Verificar:** Reimplantar serviço com dados de teste. **Evidência:** Relatório PoC.
- [ ] **PORT-13 [P2]** Definir estratégia de continuidade se SaaS for encerrado ou elevar preços drasticamente. **Verificar:** Simular interrupção contratual. **Evidência:** Plano de saída.

## 23. Testes avançados, acessibilidade, privacidade e segurança de IA

Esta seção é um subconjunto do [guia detalhado](docs/advanced-testing-accessibility-privacy-ai.md) e do [catálogo estruturado](catalog/). Cada controle informa prioridade condicional à aplicabilidade, como verificar e qual evidência apresentar. IDs são próprios do Good Practices, não de cláusulas normativas. **P0** = gate quando aplicável, **P1** = recomendado, **P2** = avançado.

### Testes avançados, concorrência e qualidade de verificação

- [ ] **TEST-01 [P0]** Definir estratégia de testes orientada a risco e requisitos funcionais/não funcionais. **Verificar:** Relacionar cada requisito crítico a um teste. **Evidência:** Matriz requisito → teste.
- [ ] **TEST-02 [P0]** Manter testes de regressão para falhas graves e incidentes anteriores. **Verificar:** Reproduzir bug antes e depois da correção. **Evidência:** Teste automatizado e issue.
- [ ] **TEST-03 [P0]** Testar concorrência e atomicidade de operações que alteram estado sensível. **Verificar:** Executar requisições simultâneas e retries. **Evidência:** Teste de race condition.
- [ ] **TEST-04 [P1]** Empregar testes baseados em propriedades para invariantes e casos combinatórios úteis. **Verificar:** Gerar entradas com semente reproduzível. **Evidência:** Relatório de property-based test.
- [ ] **TEST-05 [P1]** Aplicar fuzzing a parsers, protocolos, arquivos, serialização e entradas de alto risco. **Verificar:** Executar corpus e registrar crashes. **Evidência:** Corpus e relatório de fuzz.
- [ ] **TEST-06 [P1]** Avaliar mutation testing para medir se testes detectam defeitos, não apenas linhas executadas. **Verificar:** Rodar mutantes em módulos críticos. **Evidência:** Mutation score com análise.
- [ ] **TEST-07 [P1]** Testar limites numéricos, fusos horários, Unicode, localização, grandes payloads e campos ausentes. **Verificar:** Executar tabela de casos limites. **Evidência:** Fixtures e resultados.
- [ ] **TEST-08 [P1]** Incluir testes de contrato e de compatibilidade retroativa de APIs e eventos. **Verificar:** Rodar matriz entre versões. **Evidência:** Relatório de contratos.
- [ ] **TEST-09 [P1]** Testar isolamento multi-tenant e autorização por recurso/ação. **Verificar:** Executar acessos cruzados. **Evidência:** Matriz de permissões.
- [ ] **TEST-10 [P1]** Testar idempotência, entrega duplicada, timeout e queda de worker. **Verificar:** Injetar retries e interromper job. **Evidência:** Teste de processamento resiliente.
- [ ] **TEST-11 [P1]** Testar recuperação de backup, rollback e migrações com dados representativos. **Verificar:** Executar exercício de restauração. **Evidência:** Relatório de recuperação.
- [ ] **TEST-12 [P1]** Aplicar testes de carga, soak e picos com SLO e dados de capacidade. **Verificar:** Executar cenário de volume realista. **Evidência:** Resultados de latência/saturação.
- [ ] **TEST-13 [P1]** Investigar flakiness de testes e evitar apagar testes sem correção da causa. **Verificar:** Reexecutar testes intermitentes e correlacionar logs. **Evidência:** Histórico de falhas.
- [ ] **TEST-14 [P1]** Registrar cobertura por risco/funcionalidade, não apenas percentual bruto de código. **Verificar:** Mapear caminhos críticos com testes. **Evidência:** Matriz de cobertura funcional.
- [ ] **TEST-15 [P1]** Executar testes de acessibilidade, segurança e resiliência com ferramentas e revisão humana. **Verificar:** Validar pipeline e relatório independente. **Evidência:** Evidência de testes especializados.
- [ ] **TEST-16 [P2]** Executar testes de performance diferencial entre commits com baseline confiável. **Verificar:** Comparar execução em ambiente estável. **Evidência:** Relatório de regressão.
- [ ] **TEST-17 [P2]** Introduzir differential testing entre implementações para algoritmos críticos. **Verificar:** Comparar resultados de oráculos independentes. **Evidência:** Relatório diferencial.
### Acessibilidade real e inclusão digital

- [ ] **A11Y-01 [P0]** Definir meta de acessibilidade coerente com requisitos legais e público, preferencialmente WCAG 2.2 AA para produto web. **Verificar:** Mapear critérios aplicáveis e jornadas. **Evidência:** Matriz WCAG por interface.
- [ ] **A11Y-02 [P0]** Garantir navegação completa por teclado, foco visível e ordem de foco lógica. **Verificar:** Executar jornadas sem mouse. **Evidência:** Registro de teste teclado.
- [ ] **A11Y-03 [P0]** Garantir rótulos, nomes acessíveis e identificação de erro em formulários. **Verificar:** Testar com leitor de tela e inspeção. **Evidência:** Relatório de formulários.
- [ ] **A11Y-04 [P0]** Verificar contraste e legibilidade em estados normais, erro, hover e desabilitado. **Verificar:** Medir contraste e revisar casos. **Evidência:** Resultados de contraste.
- [ ] **A11Y-05 [P1]** Executar axe-core, Pa11y ou similar como triagem automatizada. **Verificar:** Rodar testes sobre páginas representativas. **Evidência:** Relatório de scanner.
- [ ] **A11Y-06 [P1]** Não confundir scanner sem alertas com conformidade WCAG: executar revisão manual e testes assistivos. **Verificar:** Fazer amostragem com NVDA, VoiceOver ou equivalente. **Evidência:** Roteiro de teste assistivo.
- [ ] **A11Y-07 [P1]** Testar zoom 200%-400%, reflow, orientação e redimensionamento de texto. **Verificar:** Navegar nas resoluções definidas. **Evidência:** Capturas de teste.
- [ ] **A11Y-08 [P1]** Fornecer alternativa textual para conteúdo informativo visual. **Verificar:** Revisar imagens, gráficos e diagramas. **Evidência:** Inventário de alternativas.
- [ ] **A11Y-09 [P1]** Testar mensagens dinâmicas, notificações, modais e mudanças de rota em SPA com tecnologias assistivas. **Verificar:** Executar jornada com leitor de tela. **Evidência:** Relatório de anúncio de estado.
- [ ] **A11Y-10 [P1]** Validar semântica HTML, landmarks, headings, ARIA e estados de componentes. **Verificar:** Inspecionar accessibility tree. **Evidência:** Checklist de semântica.
- [ ] **A11Y-11 [P1]** Garantir suporte a reduced motion e evitar animações que atrapalhem acesso. **Verificar:** Ativar prefers-reduced-motion. **Evidência:** Teste de preferência.
- [ ] **A11Y-12 [P1]** Testar áreas de toque, arrastar, autenticadores acessíveis e alternativas a gestos complexos. **Verificar:** Executar fluxo em mobile e teclado. **Evidência:** Roteiro de acessibilidade.
- [ ] **A11Y-13 [P1]** Fornecer legendas/transcrições para mídia conforme requisitos aplicáveis. **Verificar:** Revisar vídeos/áudios publicados. **Evidência:** Inventário de mídia acessível.
- [ ] **A11Y-14 [P1]** Corrigir impedimentos críticos antes de publicar funcionalidades essenciais. **Verificar:** Revisar issues por severidade. **Evidência:** Registro de bloqueios resolvidos.
- [ ] **A11Y-15 [P2]** Conduzir testes com pessoas com deficiência e incorporar achados. **Verificar:** Executar estudo consentido. **Evidência:** Relatório de pesquisa.
### Privacidade por concepção, ciclo de vida e minimização de dados

- [ ] **PRIV-01 [P0]** Inventariar dados pessoais, suas fontes, finalidades, bases aplicáveis, destinos e acessos. **Verificar:** Traçar fluxo de dados por serviço. **Evidência:** Mapa de tratamento de dados.
- [ ] **PRIV-02 [P0]** Minimizar coleta, armazenamento, telemetria e compartilhamento ao estritamente necessário. **Verificar:** Comparar campos coletados às finalidades. **Evidência:** Revisão de campos.
- [ ] **PRIV-03 [P0]** Garantir acesso limitado por finalidade, identidade e menor privilégio. **Verificar:** Testar permissões por papel. **Evidência:** Matriz de acesso a dados.
- [ ] **PRIV-04 [P0]** Não transmitir dados pessoais ou segredos desnecessários a logs, analytics, serviços de IA e ferramentas de erro. **Verificar:** Inspecionar payloads de observabilidade. **Evidência:** Registro de inspeção sanitizada.
- [ ] **PRIV-05 [P0]** Definir retenção, exclusão e resposta às solicitações de titulares conforme lei aplicável. **Verificar:** Testar exclusão em ambiente controlado. **Evidência:** Política e teste de eliminação.
- [ ] **PRIV-06 [P1]** Definir tratamento de dados excluídos em backups e cópias imutáveis, com prazo de expurgo apropriado. **Verificar:** Revisar retenção e restauração após exclusão. **Evidência:** Teste de restauração e retenção.
- [ ] **PRIV-07 [P1]** Oferecer exportação de dados ou portabilidade quando houver obrigação ou compromisso. **Verificar:** Executar exportação completa de teste. **Evidência:** Arquivo de export validado.
- [ ] **PRIV-08 [P1]** Documentar compartilhamentos, subprocessadores, países/regiões e localização dos dados. **Verificar:** Auditar contratos e arquitetura. **Evidência:** Matriz de fornecedores.
- [ ] **PRIV-09 [P1]** Aplicar anonimização/pseudonimização e segregação de dados em desenvolvimento e testes. **Verificar:** Verificar se reidentificação é possível. **Evidência:** Relatório de dados sintéticos.
- [ ] **PRIV-10 [P1]** Proteger identificadores em URLs, logs, traces e analytics. **Verificar:** Executar inspeção de endpoints e headers. **Evidência:** Relatório de exposição.
- [ ] **PRIV-11 [P1]** Realizar avaliação de impacto à privacidade para dados sensíveis ou riscos elevados. **Verificar:** Executar avaliação contextual. **Evidência:** Documento de impacto e mitigação.
- [ ] **PRIV-12 [P1]** Testar retenção e eliminação em cache, filas, search indexes, data lakes e backups quando aplicável. **Verificar:** Executar cenário ponta a ponta. **Evidência:** Evidência de exclusão distribuída.
- [ ] **PRIV-13 [P1]** Garantir transparência sobre coleta, cookies, tracking, bases e meios de contato. **Verificar:** Revisar experiência e política. **Evidência:** Textos publicados.
- [ ] **PRIV-14 [P1]** Estabelecer notificação e tratamento de incidentes com dados pessoais. **Verificar:** Simular incidente e comunicação. **Evidência:** Plano e exercício.
- [ ] **PRIV-15 [P1]** Medir privacidade de terceiros integrados, incluindo analytics, CDNs e fontes embutidas. **Verificar:** Inspecionar requests no navegador. **Evidência:** Mapa de terceiros.
- [ ] **PRIV-16 [P2]** Executar privacy threat modeling dedicado para mudanças de arquitetura. **Verificar:** Revisar cenários de correlacionamento/identificação. **Evidência:** Modelo de ameaças de privacidade.
### Segurança, qualidade e governança de IA e agentes

- [ ] **AIG-01 [P0]** Identificar todos os usos de IA e distinguir geração de texto de agentes capazes de executar ações. **Verificar:** Inventariar modelos, ferramentas e acessos. **Evidência:** Inventário de aplicações de IA.
- [ ] **AIG-02 [P0]** Tratar texto de usuário, arquivos, páginas recuperadas e resultados de ferramentas como entradas não confiáveis. **Verificar:** Executar testes de prompt injection. **Evidência:** Relatório de red teaming.
- [ ] **AIG-03 [P0]** Nunca permitir que instruções de um modelo sejam tratadas como autorização para acessar dados ou executar operações. **Verificar:** Testar tool calls com contas sem permissão. **Evidência:** Matriz de autorização do agente.
- [ ] **AIG-04 [P0]** Limitar escopo e privilégios de ferramentas do agente, especialmente execução de código, browser, DB e e-mail. **Verificar:** Revisar permissões e testar operações negadas. **Evidência:** Matriz de ferramentas e decisões.
- [ ] **AIG-05 [P0]** Impedir envio de segredos, chaves e dados privados a modelos sem finalidade e autorização. **Verificar:** Testar filtros/redações e integrações. **Evidência:** Relatório de vazamento de dados.
- [ ] **AIG-06 [P0]** Definir cotas, budgets e limites de tokens, tempo, concorrência e chamadas externas. **Verificar:** Simular abuso de consumo. **Evidência:** Teste de custos e limites.
- [ ] **AIG-07 [P1]** Criar dataset de avaliação versionado com cenários reais, adversariais e de erro. **Verificar:** Rodar avaliações com versão de modelo e seed. **Evidência:** Relatório de eval reproduzível.
- [ ] **AIG-08 [P1]** Medir qualidade factual, alucinação, precisão, robustez e vieses conforme contexto. **Verificar:** Comparar outputs a ground truth e revisão. **Evidência:** Métricas de qualidade.
- [ ] **AIG-09 [P1]** Sanitizar e validar saída do modelo antes de renderizar HTML, executar comandos ou alterar dados. **Verificar:** Testar output handling malicioso. **Evidência:** Teste de saída segura.
- [ ] **AIG-10 [P1]** Isolar execução de código gerado e impor sandbox com rede, filesystem e tempo limitados. **Verificar:** Executar comando de teste restrito. **Evidência:** Relatório de sandbox.
- [ ] **AIG-11 [P1]** Aplicar aprovação humana a ações irreversíveis ou de alto impacto. **Verificar:** Testar fluxo de aprovação e auditoria. **Evidência:** Fluxo de aprovação.
- [ ] **AIG-12 [P1]** Monitorar latência, uso, tokens, falhas, prompts bloqueados e custos por usuário. **Verificar:** Inspecionar dashboard sem dados sensíveis. **Evidência:** Dashboard operacional.
- [ ] **AIG-13 [P1]** Documentar modelo, versão, fornecedor, termos de uso e licenças de datasets/outputs. **Verificar:** Revisar manifest e licenças. **Evidência:** Model card / inventário.
- [ ] **AIG-14 [P1]** Avaliar poisoning de dados, RAG e vetores, incluindo recuperação entre tenants. **Verificar:** Testar injeção em documentos e cross-tenant retrieval. **Evidência:** Teste de isolamento RAG.
- [ ] **AIG-15 [P1]** Definir política de retenção e exclusão de conversas, embeddings e datasets. **Verificar:** Executar eliminação em armazenamento vetorial. **Evidência:** Evidência de retenção.
- [ ] **AIG-16 [P1]** Restringir saída de sistema de IA em contextos médicos, jurídicos, financeiros ou de alto impacto. **Verificar:** Revisar risco e controles humanos. **Evidência:** Avaliação de impacto.
- [ ] **AIG-17 [P1]** Manter monitoramento de regressões quando modelo ou prompt for atualizado. **Verificar:** Executar conjunto de avaliações antes de release. **Evidência:** Comparação entre versões.
- [ ] **AIG-18 [P2]** Realizar avaliação de segurança independente para agentes com acesso privilegiado. **Verificar:** Conduzir teste adversarial autorizado. **Evidência:** Relatório e mitigação.
- [ ] **AIG-19 [P2]** Executar avaliação contínua de drift e mudanças de dados/modelo. **Verificar:** Comparar métricas entre períodos. **Evidência:** Painel de drift.

## 24. Catálogo de controles e perfis de aplicação

Os metadados completos dos controles novos ficam em [catalog/](catalog/) e o processo de aplicação está descrito em [Controles e perfis de aplicação](docs/control-catalog-and-profiles.md). Para avaliar um projeto real, utilize o [template de avaliação por projeto](templates/project-assessment.md), com responsáveis, evidências, exceções e decisão GO/NO-GO. O README permanece a referência humana principal. **Os 1.209 controles anteriores ainda não estão integralmente normalizados no JSON**, de modo que o catálogo estruturado é incremental.

- [ ] Determinar o perfil principal: documentação, biblioteca open source, site estático/SPA, API/backend, SaaS, dados, IA, infraestrutura ou mobile.
- [ ] Aplicar overlays de open source e dados sensíveis quando pertinentes ao mesmo projeto.
- [ ] Selecionar controles de categoria geral e os relacionados aos componentes realmente usados.
- [ ] Para cada controle, registrar aplicável, N/A, falhou, verificado ou exceção temporária.
- [ ] Explicar por que um controle de outra stack foi considerado não aplicável, sem marcar falsamente como atendido.
- [ ] Associar ID estável, prioridade, responsável, método de verificação e evidência.
- [ ] Vincular riscos e controles a requirements, testes, PRs, CI, observabilidade ou documentos.
- [ ] Distinguir referência temática de exigência normativa oficial e especificar edição/ID da norma ao afirmar conformidade.
- [ ] Exigir critérios de aceite mensuráveis para requisitos funcionais e não funcionais relevantes.
- [ ] Reavaliar controles quando mudar arquitetura, fornecedor, risco, público, requisitos legais ou frequência de deploy.
- [ ] Não bloquear sites estáticos por controles de bancos de dados, filas ou Kubernetes que não se aplicam.
- [ ] Definir como um controle P0 não atendido bloqueia produção ou recebe exceção com responsável, prazo e compensação.
- [ ] Executar o validador `node scripts/validate-catalog.mjs` e verificar que todos os controles estruturados estão no README.
- [ ] Separar validação do catálogo (consistência documental) de testes de segurança/funcionalidade do projeto.
- [ ] Definir periodicidade de revisão e uma evidência fresca para cada controle crítico.
- [ ] Evitar acumular linters, scanners e regras sobrepostos sem ganho mensurável.
- [ ] Revisar periodicamente peso, custo e utilidade do checklist, reduzindo burocracia sem enfraquecer controles críticos.

## 25. Arquitetura da documentação, Diátaxis, escrita técnica e voz editorial

A documentação é um componente de qualidade, segurança e manutenção de software. Aplicar os controles abaixo conforme risco e público. **P0** é bloqueador apenas quando aplicável; **P1** é recomendado; **P2** é melhoria de maturidade. A organização e as regras editoriais são recomendações adaptáveis, não requisitos universais de uma norma técnica.

**Referências principais:** [Diátaxis](https://diataxis.fr/), [Google Developer Documentation Style Guide](https://developers.google.com/style), [Google: voice and tone](https://developers.google.com/style/tone), [Google Technical Writing](https://developers.google.com/tech-writing/overview), [Microsoft Writing Style Guide](https://learn.microsoft.com/en-us/style-guide), [Microsoft: brand voice](https://learn.microsoft.com/en-us/style-guide/brand-voice-above-all-simple-human), [GitLab Documentation Style Guide](https://docs.gitlab.com/development/documentation/styleguide/), [Kubernetes Documentation Style Guide](https://kubernetes.io/docs/contribute/style/style-guide/), [IBM Style](https://www.ibm.com/docs/en/technical-content?topic=standards-style) e [Vale](https://vale.sh/).

### 25.1. Entender e aplicar Diátaxis

O **Diátaxis** organiza a documentação em quatro modalidades que correspondem a necessidades diferentes:

| Modalidade | Pergunta do leitor | Objetivo editorial | Exemplo aplicado a Fail2Ban |
| --- | --- | --- | --- |
| **Tutorial** | Como começo a aprender? | Aprender por meio de uma experiência orientada, com passos pedagógicos e resultado observável | Configurar pela primeira vez um ambiente de testes com Fail2Ban |
| **Guia prático (how-to)** | Como concluo esta tarefa? | Resolver um objetivo específico de trabalho, presumindo conhecimentos adequados | Proteger o SSH com uma jail do Fail2Ban |
| **Referência** | Qual é o valor, contrato ou comportamento exato? | Consultar informações completas e precisas dentro de um escopo conhecido | Diretivas `maxretry`, `findtime`, `bantime`, backends e sintaxe |
| **Explicação** | Por que isso funciona ou foi escolhido? | Compreender conceitos, decisões, limites e trade-offs | Por que banimento de IP não substitui MFA ou redução de exposição |

O Diátaxis orienta a arquitetura de informação e a redação de cada modalidade, mas **não exige** quatro diretórios físicos nem um único gerador de sites. O objetivo é evitar que uma página de referência seja uma longa aula, ou que um tutorial se torne uma lista de operações sem contexto de aprendizado.

Exemplo opcional de organização:

```text
docs/
  tutorials/
    primeiro-deploy.md
  how-to/
    configurar-fail2ban.md
    restaurar-backup.md
  reference/
    variaveis-de-ambiente.md
    api.md
    configuracao.md
  explanation/
    modelo-de-autenticacao.md
    migracoes-de-banco.md
    decisoes-de-arquitetura.md
```

### Diátaxis: organização por necessidade do leitor

- [ ] **DOC-001 [P0]** Definir público e tarefas reais antes de organizar a documentação, distinguindo quem está aprendendo, executando uma tarefa, consultando informação ou buscando compreender decisões. **Evidência:** Mapa de personas, tarefas e jornada de busca de informação.
- [ ] **DOC-002 [P1]** Adotar o modelo Diátaxis (ou alternativa documentada) com quatro propósitos distintos: tutoriais, guias práticos, referência e explicações. **Evidência:** Mapa da arquitetura informacional com exemplos de cada propósito.
- [ ] **DOC-003 [P1]** Manter tutoriais com percurso de aprendizado guiado, ambiente controlado, passos sequenciais e resultado demonstrável, sem exigir experiência prévia excessiva. **Evidência:** Tutorial executado por pessoa representativa do público.
- [ ] **DOC-004 [P1]** Manter guias práticos (how-to) orientados à realização de uma tarefa real, partindo de um objetivo explícito e conhecimento prévio adequado. **Evidência:** Guia seguido para concluir uma operação verificável.
- [ ] **DOC-005 [P1]** Manter referência técnica factual, completa no escopo declarado e pesquisável, com API, schemas, parâmetros, flags, tipos, defaults, limites e erros. **Evidência:** Referência conferida com código, especificação ou configuração.
- [ ] **DOC-006 [P1]** Manter explicações conceituais que abordem porquês, contexto, decisões, arquitetura, causas, limitações e trade-offs, sem fingir serem tutoriais. **Evidência:** Revisão de contexto e decisão técnica.
- [ ] **DOC-007 [P1]** Não confundir tutorial com how-to: aprender mediante exercício é diferente de resolver uma tarefa específica em produção. **Evidência:** Revisão editorial de um exemplar de cada tipo.
- [ ] **DOC-008 [P1]** Não confundir referência com explicação: consulta factual e descrição de parâmetros são diferentes de fundamentação conceitual. **Evidência:** Revisão da localização do conteúdo.
- [ ] **DOC-009 [P1]** Separar documentos quando a mistura de objetivos dificulta localizar informações; manter links entre os quatro tipos para o mesmo assunto. **Evidência:** Teste de navegação e cobertura do assunto.
- [ ] **DOC-010 [P1]** Usar uma taxonomia estável e clara em menus, links e URLs, sem presumir que quatro diretórios rígidos sejam obrigatórios. **Evidência:** Inspeção da navegação e mapa do site.
- [ ] **DOC-011 [P1]** Associar páginas com temas de negócio e tarefas, não apenas nomes internos de bibliotecas, classes e serviços. **Evidência:** Teste de localização por usuário.
- [ ] **DOC-012 [P1]** Manter uma página de introdução e índice orientados ao primeiro contato, além de uma busca capaz de encontrar referência técnica. **Evidência:** Teste de chegada e busca.
- [ ] **DOC-013 [P2]** Executar estudo de encontrabilidade e tree testing para descobrir onde pessoas procurariam tutoriais, respostas e referências. **Evidência:** Relatório de pesquisa com ações de melhoria.

### Voz, tom, estilo e política editorial

- [ ] **DOC-014 [P0]** Definir um guia editorial próprio do projeto para idioma, público, voz, tom, terminologia, formatação, exemplos e manutenção da documentação. **Evidência:** STYLE_GUIDE.md ou seção editorial versionada.
- [ ] **DOC-015 [P1]** Distinguir voz (identidade consistente da comunicação), tom (adaptação à situação) e estilo (convenções de escrita e apresentação). **Evidência:** Guia editorial com definições e exemplos.
- [ ] **DOC-016 [P1]** Não confundir voz editorial com voz ativa gramatical; escolher voz ativa por clareza quando ela explicitar a ação. **Evidência:** Exemplos comparativos revisados.
- [ ] **DOC-017 [P1]** Adotar voz sóbria, humana, direta, respeitosa, inclusiva e tecnicamente precisa, evitando marketing exagerado, paternalismo e afirmações sem evidência. **Evidência:** Amostragem de páginas revisadas.
- [ ] **DOC-018 [P1]** Variar o tom conforme situação: neutro em referência, instrutivo em guias, acolhedor sem infantilizar iniciantes e preciso/objetivo em incidentes e erros. **Evidência:** Matriz de exemplos por gênero documental.
- [ ] **DOC-019 [P1]** Escrever principalmente com verbos concretos, sujeitos claros e instruções no imperativo, preferindo voz ativa quando natural. **Evidência:** Revisão editorial e exemplos antes/depois.
- [ ] **DOC-020 [P1]** Dar prioridade ao resultado ou à ação importante no início de instruções, alertas e procedimentos. **Evidência:** Teste de leitura rápida do conteúdo.
- [ ] **DOC-021 [P1]** Usar frases concisas e parágrafos coesos, sem eliminar contexto necessário para segurança ou compreensão. **Evidência:** Checklist de clareza e revisão humana.
- [ ] **DOC-022 [P1]** Evitar jargões, siglas sem explicação, expressões idiomáticas locais, humor ambíguo e metáforas difíceis de traduzir. **Evidência:** Glossário e revisão de internacionalização.
- [ ] **DOC-023 [P1]** Evitar termos condescendentes que pressupõem facilidade ou conhecimentos do leitor, como 'obviamente', 'basta', 'simplesmente' e 'é trivial'. **Evidência:** Revisão de vocabulário e regras editoriais.
- [ ] **DOC-024 [P1]** Manter terminologia técnica consistente para comandos, APIs, nomes de produto, objetos e funcionalidades. **Evidência:** Glossário e dicionário de termos aprovados.
- [ ] **DOC-025 [P1]** Padronizar capitalização de títulos, rótulos de UI, nomes de arquivos, ênfase, listas, sinais de pontuação e referências cruzadas. **Evidência:** Guia de formatação e revisão.
- [ ] **DOC-026 [P1]** Garantir linguagem não discriminatória e exemplos apropriados a diferentes culturas, gêneros, idades, experiências e habilidades. **Evidência:** Revisão editorial inclusiva.
- [ ] **DOC-027 [P1]** Definir variante de português (por exemplo, pt-BR) e política de tradução/localização; adaptar regras inglesas em vez de copiar sua gramática. **Evidência:** Vocabulário e decisões de localização.
- [ ] **DOC-028 [P1]** Evitar promessas de roadmap, referências temporais vagas ('novo', 'atualmente') e afirmações que ficarão desatualizadas sem indicar versão ou data. **Evidência:** Revisão de conteúdos voláteis.
- [ ] **DOC-029 [P1]** Usar datas absolutas, valores explícitos, unidades de medida, formatos e requisitos de versão quando uma instrução depender disso. **Evidência:** Verificação de exemplos dependentes de versão.
- [ ] **DOC-030 [P1]** Padronizar mensagens de erro: explicar o problema observável, o impacto e a próxima ação segura, sem revelar segredos ou culpar o usuário. **Evidência:** Testes de mensagens de erro com fluxos reais.
- [ ] **DOC-031 [P1]** Manter advertências proporcionais ao risco, incluindo pré-condições, efeitos irreversíveis e comandos destrutivos antes da execução. **Evidência:** Revisão de runbooks e procedimentos.
- [ ] **DOC-032 [P2]** Manter exemplos de antes/depois para regras de escrita e uma biblioteca curta de modelos reutilizáveis. **Evidência:** Coleção de exemplos aprovada.

### Documentação técnica executável e correta

- [ ] **DOC-033 [P0]** Documentar instalação, requisitos prévios, versões suportadas, comandos exatos, parâmetros e resultado esperado para tarefas operacionais críticas. **Evidência:** Execução bem-sucedida dos passos em ambiente limpo.
- [ ] **DOC-034 [P0]** Indicar riscos, permissões necessárias, efeitos colaterais, impacto em produção e plano de reversão em procedimentos sensíveis. **Evidência:** Revisão do procedimento antes de operar.
- [ ] **DOC-035 [P0]** Nunca publicar secrets, dados pessoais, credenciais reais ou logs não sanitizados nos exemplos. **Evidência:** Varredura de segredos e revisão de exemplos.
- [ ] **DOC-036 [P1]** Distinguir exemplos fictícios, placeholders e valores reais, deixando claro o que a pessoa deve substituir. **Evidência:** Testes de entendimento de placeholders.
- [ ] **DOC-037 [P1]** Verificar que snippets de código, YAML, JSON, comandos shell, queries e URLs funcionam ou são explicitamente ilustrativos. **Evidência:** Testes automatizados ou execução documentada.
- [ ] **DOC-038 [P1]** Manter exemplos autocontidos ou informar dependências externas, variáveis necessárias e versões exatas. **Evidência:** Teste em ambiente isolado.
- [ ] **DOC-039 [P1]** Documentar o comportamento esperado, as mensagens de erro comuns e como validar se o passo funcionou. **Evidência:** Checklist de critérios de sucesso por tutorial/how-to.
- [ ] **DOC-040 [P1]** Gerar ou validar referência de API a partir de contratos e código quando apropriado, reduzindo divergência entre documentação e produto. **Evidência:** Diff de OpenAPI/AsyncAPI e integração com build.
- [ ] **DOC-041 [P1]** Documentar política de versionamento e migração de páginas, parâmetros, endpoints e recursos descontinuados. **Evidência:** Página por versão e link de migração.
- [ ] **DOC-042 [P1]** Manter documentação de incidentes e troubleshooting pesquisável por sintomas, causas prováveis e passos seguros. **Evidência:** Exercício de diagnóstico com runbook.
- [ ] **DOC-043 [P1]** Revisar exemplos destrutivos e comandos com sudo, permissões amplas ou configuração de firewall/SSH com recuperação segura. **Evidência:** Revisão de segurança e teste em sandbox.
- [ ] **DOC-044 [P1]** Registrar autoria, revisão técnica, data de verificação, versão do produto e responsável por páginas críticas quando viável. **Evidência:** Metadados ou PR de revisão.
- [ ] **DOC-045 [P1]** Linkar decisões arquiteturais, threat models, diagramas, requisitos e documentação operacional sem duplicar conteúdo incoerente. **Evidência:** Auditoria de links cruzados.
- [ ] **DOC-046 [P2]** Criar ambientes de exemplo ou sandboxes descartáveis que permitam reproduzir tutoriais e guias sem danificar produção. **Evidência:** Execução automatizada de cenário de exemplo.

### Acessibilidade, localização, formatos e pesquisa documental

- [ ] **DOC-047 [P0]** Garantir que a documentação crítica seja utilizável com teclado e tecnologias assistivas nos formatos de publicação escolhidos. **Evidência:** Teste de navegação e leitura assistiva.
- [ ] **DOC-048 [P1]** Usar títulos semânticos e hierarquia consistente, links com texto descritivo, alternativas para figuras e descrições de diagramas relevantes. **Evidência:** Inspeção semântica e auditoria de acessibilidade.
- [ ] **DOC-049 [P1]** Evitar transmitir informação exclusivamente por cor, posição, animação ou imagem de terminal. **Evidência:** Revisão visual e assistiva.
- [ ] **DOC-050 [P1]** Fornecer legendas e transcrições para material audiovisual conforme público e requisitos aplicáveis. **Evidência:** Inventário e revisão de mídia.
- [ ] **DOC-051 [P1]** Verificar contraste, reflow, zoom e navegação do tema de documentação e de seus plugins. **Evidência:** Auditoria WCAG aplicada ao site de docs.
- [ ] **DOC-052 [P1]** Evitar tabelas excessivamente complexas ou estruturas que prejudicam leitores de tela; usar tabelas somente para dados tabulares. **Evidência:** Teste com leitor de tela.
- [ ] **DOC-053 [P1]** Manter pesquisa interna, índices, navegação por tema e links contextuais sem gerar conteúdo duplicado confuso. **Evidência:** Teste de busca por tarefas reais.
- [ ] **DOC-054 [P1]** Planejar localização de mensagens, datas, unidades, terminologia e exemplos para audiências internacionais quando necessário. **Evidência:** Revisão de localização e variantes.
- [ ] **DOC-055 [P1]** Indicar idioma e versão de cada tradução e destacar documentação potencialmente desatualizada. **Evidência:** Metadados de tradução e teste de paridade.

### Quality gates de documentação como código

- [ ] **DOC-056 [P0]** Tratar documentação técnica crítica como artefato versionado e revisado junto ao código que altera seu comportamento. **Evidência:** Revisão em PR de mudança funcional.
- [ ] **DOC-057 [P1]** Executar markdownlint-cli2 ou ferramenta equivalente para estrutura e formatação dos arquivos Markdown. **Evidência:** Relatório de CI de Markdown.
- [ ] **DOC-058 [P1]** Executar verificação de links locais e externos com lychee ou equivalente, distinguindo links temporariamente indisponíveis. **Evidência:** Relatório de links e política de retry/exceção.
- [ ] **DOC-059 [P1]** Avaliar Vale para lint editorial de terminologia, vocabulário, estilo, marcas e convenções específicas do projeto. **Evidência:** Regras Vale executadas em exemplos de docs.
- [ ] **DOC-060 [P1]** Versionar configuração do Vale (por exemplo, .vale.ini) e regras próprias com justificativa e casos válidos/inválidos. **Evidência:** Arquivos versionados e testes das regras.
- [ ] **DOC-061 [P1]** Configurar dicionário personalizado e spellchecker (por exemplo, cspell) para português e termos técnicos efetivamente usados. **Evidência:** Dicionário e relatório de falsos positivos.
- [ ] **DOC-062 [P1]** Diferenciar falhas editoriais objetivas que bloqueiam CI de sugestões subjetivas que exigem julgamento humano. **Evidência:** Política de severidade error/warning/suggestion.
- [ ] **DOC-063 [P1]** Validar snippets, código embutido, exemplos de CLI e arquivos de configuração em testes quando viável. **Evidência:** Testes de exemplo versionados.
- [ ] **DOC-064 [P1]** Executar build e checagem de links do site de documentação antes da publicação. **Evidência:** Workflow de docs com logs verificáveis.
- [ ] **DOC-065 [P1]** Executar detecção de secrets e análise de licenças/atribuições também sobre documentação, assets e exemplos. **Evidência:** Resultados de verificação de secrets/licenças.
- [ ] **DOC-066 [P1]** Evitar instalar todos os verificadores sem uma finalidade mensurável; reduzir sobreposições e ruído. **Evidência:** Matriz ferramenta → risco ou defeito detectado.
- [ ] **DOC-067 [P1]** Planejar revisão editorial por pessoas e revisão técnica por responsáveis pela funcionalidade documentada. **Evidência:** Aprovações e critérios de PR.
- [ ] **DOC-068 [P1]** Testar se a documentação funciona com versão, sistema e dependências indicados, não apenas se Markdown renderiza. **Evidência:** Registro de teste de procedimento.
- [ ] **DOC-069 [P1]** Automatizar alertas de documentação desatualizada após alterações em API, flags, releases ou esquema. **Evidência:** Issue/PR automático ou relatório de drift.
- [ ] **DOC-070 [P2]** Validar documentação de instalação e tutoriais em ambiente efêmero de CI com imagens e ferramentas fixadas. **Evidência:** Build e testes de docs reproduzíveis.

### Manutenção, governança e experiência do leitor

- [ ] **DOC-071 [P0]** Definir responsáveis pela documentação e canal claro para corrigir erros de instrução que afetem usuários ou segurança. **Evidência:** CODEOWNERS ou política de ownership documentada.
- [ ] **DOC-072 [P1]** Incluir documentação no Definition of Done quando a alteração mudar comportamento, API, configuração ou operação. **Evidência:** Checklist de PR com exemplos preenchidos.
- [ ] **DOC-073 [P1]** Estabelecer revisão em releases e calendário de atualização de páginas críticas, sem criar prazos universais artificiais. **Evidência:** Histórico de revisão e responsáveis.
- [ ] **DOC-074 [P1]** Coletar feedback sobre lacunas, documentação incorreta e dificuldades de localizar conteúdo. **Evidência:** Issues, survey ou registros de suporte.
- [ ] **DOC-075 [P1]** Avaliar se usuários conseguem concluir uma tarefa apenas seguindo a documentação, sem conhecimento implícito do mantenedor. **Evidência:** Teste de tarefa com leitor representativo.
- [ ] **DOC-076 [P1]** Medir sucesso das tarefas e tempo para localizar respostas, não só visualizações de página. **Evidência:** Teste de usabilidade documental e indicadores.
- [ ] **DOC-077 [P1]** Prever política de depreciação, redirecionamentos e arquivamento para não deixar links antigos levando a instruções inseguras. **Evidência:** Revisão de links antigos e status do conteúdo.
- [ ] **DOC-078 [P1]** Documentar licenças de textos, imagens e capturas de tela e reconhecer autores e ferramentas conforme aplicabilidade. **Evidência:** Seção de créditos e avisos de terceiros.
- [ ] **DOC-079 [P1]** Permitir contribuição de documentação com orientação adequada a pessoas não desenvolvedoras. **Evidência:** CONTRIBUTING.md e validação do processo.
- [ ] **DOC-080 [P2]** Revisar periodicamente a arquitetura documental, removendo páginas redundantes e consolidando conteúdo de baixo uso. **Evidência:** Plano editorial com justificativas.

### 25.2. Interpretação dos guias editoriais

Os guias públicos podem orientar uma **política editorial própria**, mas não devem ser reproduzidos integralmente nem copiados sem considerar o idioma e o público:

| Referência | O que absorver | Aplicação prática |
| --- | --- | --- |
| **Google Developer Documentation Style Guide** | Linguagem direta, voz ativa quando apropriada, segunda pessoa, termos consistentes, clareza global, exemplos úteis e tom respeitoso | Descrever tarefas com o que executar, por que e como confirmar resultado |
| **Microsoft Writing Style Guide** | Voz humana, simples e clara; distinguir voz persistente de tom situacional; instruções e mensagens de erro úteis | Comunicar ação e próximo passo sem ambiguidade |
| **GitLab Documentation Style Guide** | Consistência de terminologia, páginas, UI, exemplos, tabelas, links, imagens e revisão da documentação como código | Padronizar templates de PR e quality gates para docs |
| **IBM Style** | Correção, consistência, acessibilidade cultural e capacidade de tradução, terminologia e apresentação | Tornar documentação compreensível por públicos internacionais |
| **Kubernetes Documentation Style Guide** | Padrões para comandos, objetos de API, termos, referências, versões, alertas e procedimentos de infraestrutura | Criar guias operacionais reproduzíveis e seguros |
| **Diátaxis** | Organização por necessidade: aprendizado, tarefa, consulta e compreensão | Estruturar navegação sem misturar tipos documentais |
| **Google Technical Writing** | Formação em redação técnica, acessibilidade e mensagens de erro | Desenvolver habilidade editorial da equipe, não apenas impor lints |

**Voz, tom, estilo e voz ativa não são sinônimos.** Voz é o modo de comunicação recorrente do projeto, tom varia com situação e gravidade, estilo reúne convenções editoriais, e voz ativa é uma forma sintática que pode aumentar clareza.

Uma redação ruim diz: “Recomenda-se que seja realizada a verificação de eventuais bloqueios operacionais antes que a migração seja efetivada.” Uma redação acionável diz: **“Antes de executar a migração, verifique o tamanho da tabela, os locks necessários e as transações ativas. Teste a alteração em uma base com volume de dados representativo.”**

A redação técnica não precisa ser excessivamente informal, rígida ou curta. A prioridade é preservar a **correção técnica** com o mínimo de esforço cognitivo necessário.

### 25.3. Lint editorial: Vale e verificações complementares

- **Vale**: análise de texto conforme regras editoriais versionadas; pode detectar terminologia proibida, inconsistência de vocabulário e padrões textuais. [Site](https://vale.sh/) e [exemplo de integração do GitLab](https://docs.gitlab.com/development/documentation/testing/vale/).
- **markdownlint-cli2**: estrutura e formatação Markdown, como headings, listas e convenções de marcação; não substitui o Vale.
- **lychee**: links internos e externos com política adequada para páginas temporariamente indisponíveis.
- **cspell** ou equivalente: ortografia e dicionário de nomes próprios/técnicos, considerando o idioma e a taxa de falsos positivos.
- **Testes de snippets e exemplos**: conferem execução, sintaxe e comportamento real de comandos, scripts, YAML e JSON.
- **Testes de acessibilidade e usabilidade**: revisão manual e ferramentas como axe-core/Pa11y para o site de documentação.

O uso do Vale **não significa** que toda regra dos guias Google/Microsoft/IBM esteja automaticamente implementada, nem que a ferramenta verifique se uma instrução técnica está correta. Qualquer ferramenta deve ser configurada, testada, versionada e revisada antes de atuar como gate de CI.

**Critério de aceite da documentação:** uma página deve ser apropriada ao leitor e ao tipo, estar tecnicamente correta para a versão declarada, ter pré-requisitos e riscos explícitos quando houver, possuir exemplos que possam ser reproduzidos ou claramente ilustrativos, ser acessível, pesquisável e mantida junto ao produto. Itens não aplicáveis precisam de justificativa.

## Prioridades sugeridas

A organização das tarefas abaixo é uma sugestão de implementação, não uma ordem obrigatória do Open Source Guides.

1. **Fundamentos e responsabilidade:** escopo, README, licenças, orientações de contribuição, segurança e responsáveis.
2. **Colaboração e desenvolvimento:** templates, proteção de branches, testes, acessibilidade e revisão de alterações.
3. **Governança e sustentabilidade:** papéis, registro de decisões, métricas, prestação de contas, financiamento e formação de mantenedores.

## Fontes e interpretação

O [Open Source Guides](https://opensource.guide/) oferece orientações para comunidades e mantenedores de software livre. Este documento **resume e adapta** recomendações dos guias temáticos, sem reproduzi-los integralmente nem transformar sugestões em obrigações universais. A seção 10 é condicional e aplicável a projetos orientados a dados, conteúdo, transparência ou IA. As recomendações deverão ser confrontadas com a legislação aplicável, as políticas institucionais e as características de cada projeto.


**Referências principais:** [Open Source Guides](https://opensource.guide/), [GitHub Actions Security](https://docs.github.com/en/actions/security-for-github-actions), [OpenSSF](https://openssf.org/), [OWASP](https://owasp.org/), [NIST CSF](https://www.nist.gov/cyberframework), [WCAG](https://www.w3.org/TR/WCAG22/).

**Origem editorial:** catálogo adaptado e generalizado a partir do checklist público de [Rondoscopio/conformidade](https://github.com/Rondoscopio/conformidade). Regras e ferramentas não são universalmente obrigatórias. Documente escopo, evidência e exceções para cada projeto.
