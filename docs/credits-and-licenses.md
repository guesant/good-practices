# Créditos, reconhecimento e licenças de terceiros

Uma página de Créditos documenta **quem e o que tornou um projeto possível**. Deve ser útil para o usuário final, transparente sobre a cadeia de ferramentas e correta quanto às obrigações de licença.

## Checklist de implantação

- [ ] Publicar `CREDITS.md` ou uma página `/credits` com link visível no README, site ou documentação.
- [ ] Incluir seções identificáveis para mantenedores e colaboradores, frameworks e bibliotecas, ferramentas de desenvolvimento e CI, infraestrutura e serviços, conteúdos visuais, tipografia, dados e modelos.
- [ ] Registrar, conforme aplicável, nome, função no projeto, autor ou mantenedor, URL oficial, versão, licença e URL do texto correspondente.
- [ ] Distinguir uso direto, dependência transitiva, ferramenta de build, serviço externo e recurso efetivamente redistribuído.
- [ ] Atribuir a autoria de imagens, fontes, ícones, documentação, datasets e outros recursos conforme as condições de cada licença.
- [ ] Não copiar nomes de colaboradores sem observar suas preferências ou políticas de privacidade.
- [ ] Incluir todas as licenças e avisos de copyright cuja reprodução seja exigida pela forma de uso e distribuição.
- [ ] Preservar textos `NOTICE` e outros avisos exigidos por licenças específicas.
- [ ] Fornecer o código-fonte e informações necessárias à conformidade com licenças copyleft, quando exigido.
- [ ] Garantir que o pacote distribuído contenha os avisos necessários, mesmo sem acesso ao site do projeto.
- [ ] Criar inventário ou SBOM para identificar os componentes distribuídos e revisar as obrigações aplicáveis.
- [ ] Automatizar coleta quando possível e revisar manualmente incompatibilidades e detecções erradas.
- [ ] Revisar e atualizar créditos e avisos a cada release e alteração relevante de dependências.

## Modelo sugerido de CREDITS.md

```markdown
# Créditos e reconhecimentos

Este projeto utiliza software, serviços e recursos produzidos por terceiros.
As atribuições abaixo são informativas e não implicam endosso ou parceria.

## Colaboradores

Reconhecimento das contribuições com autorização ou segundo as preferências públicas dos autores.

## Ferramentas de desenvolvimento

| Ferramenta | Finalidade | Autor/organização | Licença | Site |
| --- | --- | --- | --- | --- |
| Nome | Lint/testes/build | Organização | Identificador SPDX, se disponível | URL |

## Bibliotecas, frameworks e dependências

Consulte o inventário de dependências e o SBOM versionado, quando disponível.

## Recursos visuais e dados

Relacione autoria, origem, alterações e atribuição exigida por cada recurso.

## Licenças de terceiros

Os textos de licença e avisos obrigatórios dos componentes distribuídos
estão em LICENSES/ ou THIRD_PARTY_NOTICES.md, conforme aplicável.
```

## Estrutura sugerida

```text
CREDITS.md
LICENSE
LICENSES/
  ...
THIRD_PARTY_NOTICES.md
sbom/
  ...
```

Essa estrutura é **uma opção**, não uma obrigação universal. Para projetos que não redistribuem certas ferramentas de desenvolvimento, não há obrigação automática de incorporar o texto de todas as licenças dessas ferramentas aos artefatos finais. Ainda assim, a página pode reconhecê-las como boa prática de transparência.

## Precisões importantes

**Creditar não é cumprir automaticamente a licença.** Licenças permissivas frequentemente exigem preservação de avisos de copyright e termos; licenças copyleft podem exigir também oferta de código-fonte ou outras condições, a depender da licença e do tipo de distribuição.

**Créditos não são propaganda de endosso.** Nomear uma ferramenta utilizada não implica patrocínio, parceria ou aprovação do projeto por seus autores.

**Cuidado com uso de marca.** Uma atribuição textual costuma ser diferente do direito de utilizar logotipos e outras marcas em material promocional.

**Nem tudo precisa ser reproduzido indiscriminadamente.** Os textos e avisos legalmente exigidos precisam ser incluídos onde aplicável; reproduzir termos contratuais proprietários ou licenças sem verificar o contexto não é uma regra genérica válida.

**Ferramentas úteis:** [SPDX](https://spdx.dev/), [REUSE](https://reuse.software/), [ScanCode Toolkit](https://github.com/aboutcode-org/scancode-toolkit), [Syft](https://github.com/anchore/syft), [CycloneDX](https://cyclonedx.org/) e [ClearlyDefined](https://clearlydefined.io/).
