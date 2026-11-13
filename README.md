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

**Guias aprofundados:** [GitHub e README](docs/github-repository-setup.md) · [Hardening](docs/security-hardening.md) · [Normas em controles e requisitos não funcionais](docs/standards-to-controls.md) · [Ferramentas](docs/tooling-configurations.md) · [Créditos e licenças](docs/credits-and-licenses.md).

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

## Prioridades sugeridas

A organização das tarefas abaixo é uma sugestão de implementação, não uma ordem obrigatória do Open Source Guides.

1. **Fundamentos e responsabilidade:** escopo, README, licenças, orientações de contribuição, segurança e responsáveis.
2. **Colaboração e desenvolvimento:** templates, proteção de branches, testes, acessibilidade e revisão de alterações.
3. **Governança e sustentabilidade:** papéis, registro de decisões, métricas, prestação de contas, financiamento e formação de mantenedores.

## Fontes e interpretação

O [Open Source Guides](https://opensource.guide/) oferece orientações para comunidades e mantenedores de software livre. Este documento **resume e adapta** recomendações dos guias temáticos, sem reproduzi-los integralmente nem transformar sugestões em obrigações universais. A seção 10 é condicional e aplicável a projetos orientados a dados, conteúdo, transparência ou IA. As recomendações deverão ser confrontadas com a legislação aplicável, as políticas institucionais e as características de cada projeto.


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

**Referências principais:** [Open Source Guides](https://opensource.guide/), [GitHub Actions Security](https://docs.github.com/en/actions/security-for-github-actions), [OpenSSF](https://openssf.org/), [OWASP](https://owasp.org/), [NIST CSF](https://www.nist.gov/cyberframework), [WCAG](https://www.w3.org/TR/WCAG22/).

**Origem editorial:** catálogo adaptado e generalizado a partir do checklist público de [Rondoscopio/conformidade](https://github.com/Rondoscopio/conformidade). Regras e ferramentas não são universalmente obrigatórias. Documente escopo, evidência e exceções para cada projeto.
