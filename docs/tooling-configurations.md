# Configurações de ferramentas: referências de projetos reais

Catálogo reutilizável de configurações identificadas nos repositórios de `guesant`. Este documento **não declara que todas as configurações foram testadas neste repositório**. Os exemplos são pontos de partida, extraídos de arquivos existentes em outros projetos. Verifique a versão instalada da ferramenta, o formato de configuração, a compatibilidade dos plugins e o escopo de cada projeto antes de copiar.

## Checklist de adoção

- [ ] Definir quais linguagens, extensões, diretórios e artefatos devem ser examinados.
- [ ] Escolher uma ferramenta principal de formatação por tipo de arquivo.
- [ ] Escolher um linter principal e adicionar regras especializadas somente para lacunas concretas.
- [ ] Manter configurações versionadas, com globs de inclusão e exclusão revisados.
- [ ] Fixar versões das ferramentas e manter lockfiles quando disponíveis.
- [ ] Separar verificações rápidas de PR de verificações completas e demoradas.
- [ ] Executar localmente as mesmas verificações que bloqueiam merge no CI.
- [ ] Incluir testes das regras personalizadas e documentar as razões de cada restrição.
- [ ] Evitar suppressions globais e documentar exceções com justificativa.
- [ ] Exigir resultados verificáveis, não apenas jobs de exemplo com saída bem-sucedida.

## ESLint e TypeScript: análise tipada, imports e regras arquiteturais

**Origem:** [guesant/lobby: configuração central ESLint](https://github.com/guesant/lobby/blob/main/.config/eslint.config.ts).

O projeto usa Flat Config, `@eslint/js`, `typescript-eslint` com presets `strictTypeChecked` e `stylisticTypeChecked`, `eslint-plugin-svelte`, `eslint-plugin-sonarjs`, `eslint-plugin-import-x`, `eslint-plugin-simple-import-sort`, `@stylistic/eslint-plugin` e um conjunto de regras próprias em `.config/eslint-rules/`.

- [ ] Usar Flat Config em projetos com versões compatíveis do ESLint.
- [ ] Habilitar regras TypeScript com informações de tipo quando o custo for justificável.
- [ ] Aplicar regras específicas de Svelte, React ou outro framework somente quando utilizado.
- [ ] Organizar imports com um único mecanismo, sem conflito com formatadores.
- [ ] Configurar `--max-warnings 0` para um quality gate estrito, quando a política exigir.
- [ ] Incluir regras próprias somente quando convenções do projeto não forem atendidas por plugins estabelecidos.
- [ ] Adicionar testes automatizados para cada regra própria.
- [ ] Evitar copiar restrições subjetivas (por exemplo, proibir ternários ou limitar funções por arquivo) como se fossem universais.
- [ ] Validar custo e compatibilidade de análises type-aware e dos plugins na versão escolhida.

**Referência de execução:** [lint-code.ts](https://github.com/guesant/lobby/blob/main/.config/scripts/quality/lint-code.ts) executa `eslint --config website/eslint.config.js . --max-warnings 0` e Knip em etapa própria.

## Biome: alternativa integrada para lint e formatação

**Origem:** [guesant/fabricjs-object-fit: src/biome.json](https://github.com/guesant/fabricjs-object-fit/blob/main/src/biome.json).

A configuração encontrada define `files.includes` para os fontes dos pacotes, formatação com espaços de dois caracteres e largura de 80, regras recomendadas do linter, `noUnusedVariables` como erro e estilo JavaScript de aspas duplas e ponto e vírgula.

```json
{
  "$schema": "https://biomejs.dev/schemas/2.4.9/schema.json",
  "files": {
    "includes": ["packages/*/src/**"]
  },
  "formatter": {
    "enabled": true,
    "indentStyle": "space",
    "indentWidth": 2,
    "lineWidth": 80
  },
  "linter": {
    "enabled": true,
    "rules": {
      "recommended": true,
      "correctness": { "noUnusedVariables": "error" }
    }
  },
  "javascript": {
    "formatter": {
      "quoteStyle": "double",
      "semicolons": "always"
    }
  }
}
```

- [ ] Avaliar Biome como ferramenta integrada de lint/formatação para as linguagens suportadas.
- [ ] Definir explicitamente diretórios analisados e gerados.
- [ ] Usar o schema correspondente à versão instalada; não copiar cegamente o schema 2.4.9.
- [ ] Evitar conflito entre Biome e ESLint/Prettier sobre o mesmo conjunto de regras.
- [ ] Complementar Biome com análise tipada, SAST ou plugins específicos quando necessário.

O exemplo acima é uma **adaptação mínima** do arquivo original: omite `experimentalScannerIgnores`, que precisa de avaliação conforme a versão e os diretórios do projeto.

## Prettier e Stylelint: formatação e CSS

**Origens:** [Prettier no lobby](https://github.com/guesant/lobby/blob/main/.config/prettier.config.ts), [Stylelint no lobby](https://github.com/guesant/lobby/blob/main/.config/.stylelintrc.json) e [Stylelint no blog](https://github.com/guesant/blog/blob/main/.stylelintrc.json).

O Prettier do lobby usa plugins para Svelte e arrays multilinha, aspas simples, vírgulas finais, `objectWrap: preserve` e tratamento específico de whitespace em `.svelte`. O Stylelint usa `stylelint-config-standard`; uma configuração mais rigorosa restringe unidades físicas e tamanhos rígidos.

- [ ] Configurar Prettier quando suas linguagens e opções forem adequadas.
- [ ] Habilitar plugin de framework somente quando necessário.
- [ ] Escolher uma única fonte de verdade para formatação.
- [ ] Adotar `stylelint-config-standard` como ponto de partida para CSS.
- [ ] Avaliar restrições adicionais de unidades e propriedades conforme o design system, sem presumir que proibir `px` seja adequado para qualquer interface.
- [ ] Excluir bundles, assets gerados e dependências do lint.
- [ ] Verificar regras CSS em código fonte, não em saídas compiladas.

## ast-grep: política estrutural personalizada

**Origens:** [configuração do lobby](https://github.com/guesant/lobby/blob/main/.config/ast-grep/sgconfig.yml), [regra TypeScript](https://github.com/guesant/lobby/blob/main/.config/ast-grep/rules/no-narrative-comments-typescript.yml), [testes CSS](https://github.com/guesant/lobby/blob/main/.config/ast-grep/tests/no-narrative-comments-css.yml) e [configuração da infraestrutura](https://github.com/guesant/hl-infrastructure/blob/main/.config/ast-grep/sgconfig.yml).

```yaml
ruleDirs:
  - rules
testConfigs:
  - testDir: tests
```

Comandos observados nos projetos:

```sh
ast-grep test --config .config/ast-grep/sgconfig.yml
ast-grep scan --config .config/ast-grep/sgconfig.yml .
```

O lobby possui regras para comentários narrativos em TypeScript, JavaScript, CSS e YAML, com casos válidos e inválidos. Na infraestrutura há `languageGlobs` para arquivos de template `*.j2`.

- [ ] Criar regras estruturais para invariantes verificáveis e repetitivos.
- [ ] Incluir testes positivos e negativos para cada regra.
- [ ] Documentar o motivo de cada regra e as exceções legítimas.
- [ ] Evitar que regras de estilo específicas sejam impostas a todos os projetos.
- [ ] Verificar se o parser cobre a linguagem e o formato efetivo dos arquivos.
- [ ] Rodar testes das regras antes de executá-las como bloqueio de CI.

## jscpd: detecção de duplicação

**Origens:** [configuração YAML da infraestrutura](https://github.com/guesant/hl-infrastructure/blob/main/.config/jscpd.json) e [scripts de tooling do lobby](https://github.com/guesant/lobby/blob/main/.config/package.json).

Configuração real encontrada na infraestrutura:

```json
{
  "path": ["../ansible/roles"],
  "ignore": ["**/templates/**"],
  "format": ["yaml"],
  "minLines": 8,
  "minTokens": 70,
  "reporters": ["console", "json"],
  "output": "./.build/jscpd-report"
}
```

O lobby executa `jscpd` com `--min-tokens 50 --min-lines 5 --skip-comments`, filtragem de fontes e testes, além de um baseline versionado e `--fail-on-new-clones=0`. Consulte o [baseline efetivo](https://github.com/guesant/lobby/blob/main/.config/jscpd-baseline.json).

- [ ] Definir linguagens, diretórios e formatos a escanear.
- [ ] Excluir código gerado, dependências e duplicações deliberadas justificadas.
- [ ] Ajustar `minLines` e `minTokens` para reduzir falsos positivos.
- [ ] Considerar baseline para repositórios legados.
- [ ] Bloquear novas duplicações, em vez de criar uma meta irreal de zerar imediatamente todo o legado.
- [ ] Investigar a semântica antes de refatorar trechos semelhantes.
- [ ] Atualizar baseline somente após revisão consciente.

## Knip: arquivos, exports e dependências não utilizados

**Origens:** [configuração do lobby](https://github.com/guesant/lobby/blob/main/.config/knip.json) e [executor do lobby](https://github.com/guesant/lobby/blob/main/.config/scripts/quality/lint-code.ts).

O arquivo do lobby define workspaces, `entry` e `project`, arquivos de configuração ESLint e `ignoreBinaries` para ferramentas invocadas externamente. O executor usa `--treat-config-hints-as-errors`.

- [ ] Definir entrypoints reais, inclusive rotas e scripts de automação.
- [ ] Informar workspaces e fontes sem incluir diretórios de build.
- [ ] Configurar integrações de frameworks e ferramentas externas.
- [ ] Investigar usos dinâmicos antes de remover exports considerados mortos.
- [ ] Tratar warnings de configuração como erro em pipelines estabilizados.

## GitHub Actions: actionlint, zizmor e segregação de checks

**Origens:** [CI da infraestrutura](https://github.com/guesant/hl-infrastructure/blob/main/.github/workflows/ci.yml), [script do blog](https://github.com/guesant/blog/blob/main/.config/check.sh).

O CI da infraestrutura usa `actionlint` para validação dos workflows, `zizmor` para auditoria de segurança, jobs separados para outras ferramentas, checkout com `persist-credentials: false`, `permissions: contents: read` no escopo global e escalonamento de permissões por job quando necessário.

No blog, `zizmor --format sarif` gera relatório, e `actionlint` roda sobre `.github/workflows/*.yml`.

- [ ] Validar todos os workflows com actionlint.
- [ ] Auditar exposição de segredos, injeção e permissões com zizmor.
- [ ] Limitar `GITHUB_TOKEN` às permissões necessárias por job.
- [ ] Fixar ações de terceiros por SHA integral e manter anotações de versão.
- [ ] Impedir execução de código não confiável com credenciais privilegiadas.
- [ ] Desabilitar persistência de credenciais no checkout quando não necessária.
- [ ] Publicar SARIF quando desejado e configurar permissões apropriadas para upload.
- [ ] Evitar configurações específicas de runner sem justificativa.
- [ ] Documentar estratégia de jobs condicionais, jobs obrigatórios e resultado do gate agregador.
- [ ] Exercitar o cenário em que um job é pulado ou falha, para evitar gate falsamente verde.

## Hadolint, ShellCheck, yamllint, markdownlint e Gitleaks

**Origens:** [script agregador do blog](https://github.com/guesant/blog/blob/main/.config/check.sh), [configuração Hadolint do blog](https://github.com/guesant/blog/blob/main/.config/hadolint.yaml) e [CI da infraestrutura](https://github.com/guesant/hl-infrastructure/blob/main/.github/workflows/ci.yml).

A configuração Hadolint recuperada do blog contém:

```yaml
failure-threshold: error
```

O CI da infraestrutura inclui exceções `DL3008` e `DL3018` para o Hadolint; essas exceções são **específicas daquele projeto**, não defaults recomendados.

- [ ] Validar Dockerfiles com Hadolint.
- [ ] Justificar cada regra ignorada de Hadolint.
- [ ] Analisar shell scripts com ShellCheck e padronizar formatação com shfmt, quando aplicável.
- [ ] Validar YAML com yamllint, respeitando sintaxe específica de templates e GitHub Actions.
- [ ] Verificar Markdown com markdownlint-cli2 e links com um verificador dedicado.
- [ ] Executar Gitleaks no conteúdo apropriado e considerar análise de histórico.
- [ ] Proteger relatórios SARIF contra vazamento de segredos e informação sensível.
- [ ] Não confundir a geração de um relatório com uma política efetiva de bloqueio.

## Renovate e gestão automatizada de dependências

**Origem:** [guesant/hl-infrastructure: renovate.json](https://github.com/guesant/hl-infrastructure/blob/main/.github/renovate.json).

A configuração usa `config:recommended`, janela mínima de maturação de sete dias (com exceções), `pinDigests` para imagens, regras por gerenciador, grupos de atualizações, custom managers regex para ferramentas em YAML e comandos pós-atualização para checksums.

- [ ] Habilitar atualizações automáticas com Renovate ou Dependabot.
- [ ] Escolher política explícita para agrupamento, frequência e versão mínima.
- [ ] Avaliar `minimumReleaseAge` conforme risco e urgência de patches.
- [ ] Fixar imagens por digest quando reprodutibilidade e segurança exigirem.
- [ ] Incluir dependências fora de manifests convencionais via custom managers.
- [ ] Testar managers regex para evitar updates errados.
- [ ] Proteger execução de scripts pós-atualização e avaliar permissões do bot.
- [ ] Rodar testes e análise de segurança em PRs gerados automaticamente.
- [ ] Evitar atualização automática de arquivos cuja versão é gerida por outro controlador.

## Testes e relatórios de segurança

**Origens:** [tooling do lobby](https://github.com/guesant/lobby/blob/main/.config/package.json), [CI da infraestrutura](https://github.com/guesant/hl-infrastructure/blob/main/.github/workflows/ci.yml) e [verificações do blog](https://github.com/guesant/blog/blob/main/.config/check.sh).

Nos repositórios aparecem Vitest, fast-check, Trivy, scanners OSV, SBOM, SARIF, além de tarefas de testes e qualidade. A combinação depende do tipo de entrega.

- [ ] Garantir testes unitários, de integração e de contrato onde necessários.
- [ ] Empregar testes baseados em propriedades com fast-check para invariantes úteis.
- [ ] Escanear dependências e artefatos com OSV-Scanner e/ou Trivy.
- [ ] Produzir SBOM de artefatos relevantes.
- [ ] Separar scanners com escopos complementares de scanners redundantes.
- [ ] Centralizar relatórios e manter políticas claras de tratamento.
- [ ] Evitar tratar código gerado, caches e lockfiles como fontes regulares de código-fonte.

## Qlty: candidato ainda não localizado nos repositórios pesquisados

Não foi encontrada uma configuração `qlty.toml` ou uso confirmado de Qlty nas buscas efetuadas em `guesant`. Assim, **não existe exemplo próprio verificado para copiar aqui**.

- [ ] Avaliar Qlty se a agregação de métricas ou a substituição de verificações já existentes trouxer benefício.
- [ ] Comparar suas análises com ESLint, Biome, jscpd, Knip e scanners já adotados antes de adicionar mais uma etapa.
- [ ] Registrar exemplo e versão somente após configurar e testar a ferramenta num projeto real.

## Guia rápido de seleção

| Objetivo | Escolha principal | Complemento ou alternativa |
| --- | --- | --- |
| Lint JS/TS com regras avançadas | ESLint + typescript-eslint | Biome |
| Lint e formatação integrados | Biome | ESLint + Prettier |
| Formatação de Svelte | Prettier com plugin Svelte | Ferramenta compatível testada |
| Lint CSS | Stylelint | Regras próprias conforme design system |
| Regras AST específicas | ast-grep | Plugin ESLint customizado |
| Duplicação | jscpd | Análise manual contextual |
| Código morto | Knip | Inspeção de imports e build |
| GitHub Actions (sintaxe) | actionlint | Validação de workflow |
| GitHub Actions (segurança) | zizmor | Revisão de risco e permissões |
| Dockerfile | Hadolint | Trivy para imagens |
| Segredos | Gitleaks | Proteções do provedor |
| Dependências | Renovate | Dependabot |
| Vulnerabilidades | OSV-Scanner | Trivy |
| Visão consolidada de qualidade | Avaliar Qlty | Relatórios dos scanners existentes |

## Critério de qualidade das recomendações

Uma recomendação de configuração só deve ser promovida a template reutilizável se incluir:

1. Arquivo de origem e commit ou tag de referência.
2. Objetivo do controle e problemas que pretende detectar.
3. Linguagens e versões de ferramentas suportadas.
4. Exemplo mínimo de configuração.
5. Comando local de execução e comando usado no CI.
6. Critério de sucesso e política de falha.
7. Testes e exemplos válidos/inválidos para regras próprias.
8. Limitações, sobreposições e falsos positivos conhecidos.
9. Restrições de segurança e permissões exigidas.
10. Motivos para não aplicar aquela ferramenta a determinado projeto.

**Nota:** os links acima apontam para os arquivos nas branches padrão dos repositórios de origem; versões e conteúdo podem evoluir. Para auditorias e templates estáveis, prefira referenciar commits imutáveis.
