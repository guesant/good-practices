# GitHub: configurações, arquivos comunitários, proteção de branches e README

Este guia contém um **perfil de preferência pessoal** e controles de segurança mais amplos. As escolhas de merge commit exclusivo, aparência dos badges e convenções de commits são preferências, **não exigências da ISO, do NIST ou do GitHub**.

**Referências reais:** [guesant/.github](https://github.com/guesant/.github), [guesant/hl-infrastructure](https://github.com/guesant/hl-infrastructure), [guesant/lobby](https://github.com/guesant/lobby), [CI da infraestrutura](https://github.com/guesant/hl-infrastructure/blob/main/.github/workflows/ci.yml) e [CI do Lobby](https://github.com/guesant/lobby/blob/main/.github/workflows/ci.yml).

## 1. Settings → General: perfil preferido

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

**Observação:** foram confirmadas suas **preferências declaradas**, mas não a configuração efetivamente ativa de merge nos repositórios existentes. A consulta de metadados não retornou esses valores; portanto, não declarar a verificação como concluída.

Documentação: [GitHub: tipos de merge](https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/configuring-pull-request-merges/configuring-pull-request-merges), [exclusão automática de branches](https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/configuring-pull-request-merges/managing-the-automatic-deletion-of-branches).

## 2. Rulesets, proteção de branch e política de pull requests

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

## 3. Repository settings: segurança e automações

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

## 4. Repositório especial `owner/.github`

**Exemplo verificado:** [guesant/.github](https://github.com/guesant/.github).

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

## 5. Arquivos recomendados em cada repositório

```text
README.md
LICENSE
CREDITS.md
CHANGELOG.md
CONTRIBUTING.md
CODE_OF_CONDUCT.md
SECURITY.md
SUPPORT.md
AGENTS.md                    # somente se houver uso real
.github/
  CODEOWNERS
  ISSUE_TEMPLATE/
    bug.yml
    feature.yml
    config.yml
  DISCUSSION_TEMPLATE/       # condicional
  PULL_REQUEST_TEMPLATE.md
  FUNDING.yml                # condicional
  workflows/
    ci.yml
    scorecard.yml            # condicional
    codeql.yml               # condicional
  renovate.json              # quando Renovate for escolhido
docs/
  architecture/
  decisions/
LICENSES/                    # conforme obrigações
THIRD_PARTY_NOTICES.md       # conforme obrigações
```

A lista é um **catálogo**, não a exigência de criar arquivos vazios. Algumas políticas podem ser herdadas de `owner/.github`.

- [ ] Adicionar `CODEOWNERS` em um dos locais reconhecidos (`.github/`, raiz ou `docs/`) quando houver responsáveis aptos a revisar.
- [ ] Cobrir código-fonte, infraestrutura, workflows, arquivos de segurança e regras de CI com CODEOWNERS quando aplicável.
- [ ] Confirmar sintaxe, precedência de padrões e permissão de escrita dos owners.
- [ ] Criar template de PR com descrição, motivação, teste, impacto, riscos e checklist de publicação.
- [ ] Usar GitHub Issue Forms para informações estruturadas quando úteis, sem tornar burocrático o relato.
- [ ] Referenciar políticas globais de `.github` e sobrescrever somente por necessidade explícita.
- [ ] Manter licença própria do projeto em `LICENSE` e licenças de terceiros separadas.
- [ ] Manter arquivos editoriais de configurações como `.editorconfig`, `.gitignore`, `.gitattributes` e configurações de lint.
- [ ] Evitar duplicar instruções conflitantes entre README, CONTRIBUTING e documentação.

## 6. README: apresentação, badges e transparência

**Referências:** [HL Infrastructure README](https://github.com/guesant/hl-infrastructure/blob/main/README.md) e [Lobby README](https://github.com/guesant/lobby/blob/main/README.md).

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

### Badges de referência, adaptáveis

Os exemplos abaixo seguem os padrões visuais encontrados nos READMEs; altere `OWNER`, `REPO`, workflow e cores conforme o projeto.

```markdown
[![CI](https://img.shields.io/github/actions/workflow/status/OWNER/REPO/ci.yml?branch=main&label=CI&style=for-the-badge&labelColor=0b1120&color=2563eb&logo=githubactions&logoColor=white)](https://github.com/OWNER/REPO/actions/workflows/ci.yml)
[![Licença](https://img.shields.io/github/license/OWNER/REPO?style=for-the-badge&labelColor=0b1120&color=7c3aed&logo=gnu&logoColor=white)](LICENSE)
[![OpenSSF Scorecard](https://img.shields.io/ossf-scorecard/github.com/OWNER/REPO?label=OpenSSF%20Scorecard&style=flat-square&labelColor=0b1120&color=2563eb)](https://scorecard.dev/viewer/?uri=github.com/OWNER/REPO)
[![Último commit](https://img.shields.io/github/last-commit/OWNER/REPO/main?label=último%20commit&style=flat-square&labelColor=0b1120&color=b45309&logo=git&logoColor=white)](https://github.com/OWNER/REPO/commits/main)
[![Issues abertas](https://img.shields.io/github/issues/OWNER/REPO?label=Issues%20Abertas&style=flat-square&labelColor=0b1120&color=b45309&logo=github&logoColor=white)](https://github.com/OWNER/REPO/issues)
[![Feito no Brasil](https://img.shields.io/badge/Feito%20no-Brasil-009440?style=flat-square&labelColor=0b1120)](https://pt.wikipedia.org/wiki/Brasil)
```

### Disclaimer de licença e uso: modelo curto

> Este projeto é disponibilizado nos termos da licença indicada em [LICENSE](LICENSE). A licença rege permissões, condições e limitações; esta seção não substitui seu texto integral. O software é fornecido sem garantias na extensão prevista em sua licença e na legislação aplicável. Ferramentas, marcas e materiais de terceiros mantêm seus próprios direitos e licenças. Consulte [Créditos](CREDITS.md) e os avisos de terceiros quando aplicáveis.

**Não copie este disclaimer para substituir cláusulas da licença original.** Adeque a redação ao produto, jurisdição e obrigações reais.

## 7. Checklist de auditoria inicial

- [ ] Registrar screenshot/export das configurações de General, Branches, Rulesets, Actions e Security, sem revelar segredos.
- [ ] Fazer PR de teste para verificar revisão, gates, merge commit e exclusão automática de branch.
- [ ] Testar canal privado de reporte de vulnerabilidade.
- [ ] Verificar que badges, links, licenças e créditos correspondem ao estado real.
- [ ] Agendar revisão de permissões, bots, tokens e arquivos comunitários.
