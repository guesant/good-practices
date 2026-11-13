# Good Practices: checklist geral de engenharia de software e open source

Checklist extensivo, genérico e reutilizável de práticas de open source, engenharia de software, automação, segurança, qualidade, governança e operação, adaptado a partir de [Open Source Guides](https://opensource.guide/) e de práticas técnicas adotáveis em diferentes projetos.

**Finalidade:** orientar avaliações e melhorias. Esta lista não é certificação de conformidade, avaliação jurídica nem declaração de que cada prática já esteja implementada. Os itens começam desmarcados porque ainda precisam de verificação. Uma caixa desmarcada não prova ausência da prática. A conclusão deve ser acompanhada, quando possível, de referência verificável (arquivo, configuração, issue, commit, política ou procedimento).

**Aplicabilidade:** o checklist é um catálogo de controles, não um conjunto de obrigações para todos os projetos. Avalie cada item como obrigatório para o contexto, recomendado, pendente ou não aplicável. Um repositório de documentação não precisa de todos os controles de uma aplicação produtiva.

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
