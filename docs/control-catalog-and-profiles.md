# Catálogo de controles e perfis de aplicabilidade

O `README.md` é a **visão humana consolidada**. Para os controles novos, os arquivos `catalog/*-controls.json` fornecem IDs estáveis, prioridade, perfis, verificação e evidência em formato legível por máquinas. O catálogo é **incremental**: os controles antigos do README ainda não foram integralmente convertidos em dados estruturados. Não afirme que todos os itens do README possuem metadata estruturada.

## Definição de controle

| Campo | Finalidade | Exemplo |
| --- | --- | --- |
| `id` | Identificador estável e próprio do catálogo | `ASVS-03` |
| `priority` | Prioridade de implantação, condicional à aplicabilidade | `P0` |
| `text` | O resultado esperado, sem impor uma ferramenta específica | Verificar autorização no backend |
| `profiles` | Tags de ambientes ou produtos onde costuma ser relevante | `api`, `saas` |
| `verify` | Como testar de modo independente | Executar acesso cruzado com usuários distintos |
| `evidence` | O que anexar à avaliação | Teste automatizado + relatório |
| `reference` | Fonte temática oficial ou autorizada | Site da OWASP |
| `section` | Agrupamento editorial | Segurança verificável |

**IDs próprios não equivalem a cláusulas normativas.** Se houver ID de ASVS/ISO/NIST específico, registre-o separadamente, com edição e conferência no texto oficial. A simples proximidade temática não autoriza alegar conformidade.

## Prioridades e estados

**P0 – bloqueador de publicação se aplicável:** exige verificação e evidência. Uma exceção temporária deve informar risco aceito, dono, mitigação compensatória, expiração e revisão.

**P1 – recomendado:** definir responsável e prioridade; pode ser gate para produtos críticos.

**P2 – aprimoramento opcional:** adotar quando custo/benefício e risco justificarem.

Estados de avaliação sugeridos: `pending`, `applicable`, `not_applicable`, `passed`, `failed`, `exception`. Não marque como `passed` com base somente em um arquivo, tool instalada ou workflow que não executou testes reais.

## Perfis por tipo de projeto

| Perfil | Escopo | Priorizar |
| --- | --- | --- |
| **Base geral** | Todos | Documentação, licença, rastreabilidade, supply chain |
| **Open source** | Projetos com colaboração | OpenSSF, políticas e transparência |
| **Biblioteca/SDK** | Componentes públicos reutilizados | Contratos, SemVer, suporte e dependências |
| **Documentação** | Docs/SSG de conteúdo | Links, acessibilidade, reprodução, atribuições |
| **Site estático/SPA** | Frontend e ativos públicos | DNS, HTTPS, CSP, acessibilidade, custo |
| **API/backend** | Serviço com endpoints/filas | Autorização, contrato, jobs, logs e resiliência |
| **SaaS autenticado** | Usuários e dados persistentes | Tenant, privacidade, observabilidade e backups |
| **Dados sensíveis** | Overlay sobre tipo de aplicação | Proteção de dados, segurança reforçada e auditoria |
| **Dados/pipelines** | Processamentos e datasets | Proveniência, retenção e integridade |
| **IA/agentes** | Sistemas com modelos | Prompt injection, custos, ferramentas, avaliações |
| **Infraestrutura** | Cloud, on-prem, GitOps | Recuperação, hardening, DNS, monitoramento |
| **Aplicativo móvel** | Dispositivos e apps | Privacidade, acessibilidade, backend seguro |

Perfil é ponto de partida e **não substitui avaliação de aplicabilidade**. Um site estático pode ter custos por provedor e um SaaS pode usar SMS; ambos devem habilitar controles contextuais além das tags sugeridas. Tags não determinam obrigação legal.

## Fluxo de aplicação a um projeto

1. Registrar projeto, estágio, responsáveis, dados, criticidade, ambientes e provedores.
2. Selecionar tipo principal, overlays (sensível, IA, open source) e categorias de risco.
3. Filtrar controles de `all` e tags selecionadas; acrescentar riscos específicos.
4. Para cada controle, registrar aplicabilidade, P0/P1/P2, responsável, verificação, evidência e data da última execução.
5. Executar checks automatizados e revisões humanas; anexar artefato ou URL identificável.
6. Bloquear release quando houver P0 aplicável não atendido sem exceção aprovada.
7. Revisar escopo após incidente, introdução de fornecedor, mudança de arquitetura ou alteração regulatória.

## Exemplo de registro de avaliação

```json
{
  "project": "exemplo-api",
  "control_id": "ASVS-03",
  "profile": "saas",
  "applicability": "applicable",
  "status": "passed",
  "owner": "equipe-backend",
  "method": "testes de acesso cruzado entre usuários",
  "evidence": "link para execução de CI com testes de autorização",
  "reviewed_at": "2026-11-13",
  "next_review": "2026-12-13",
  "exception": null
}
```

## Qualidade do catálogo

- [ ] IDs exclusivos em todos os arquivos JSON.
- [ ] Prioridades `P0`, `P1` ou `P2` explicitadas.
- [ ] `profiles` existentes em [catalog/profiles.json](../catalog/profiles.json).
- [ ] Toda regra inclui instrução testável e evidência distinguível de presença de arquivo.
- [ ] Referências com URL verificável, evitando nomes de normas sem fonte.
- [ ] Controles com IDs presentes também no README central.
- [ ] Exceções aprovadas têm prazo, escopo, compensação, responsável e revisão.
- [ ] Documentar o que o catálogo ainda não cobre, especialmente controles antigos sem metadata.
- [ ] Não confundir passar no validador do catálogo com conformidade de um sistema operacional.

O projeto disponibiliza [JSON Schema](../catalog/schema.json) e [validador de catálogo](../scripts/validate-catalog.mjs). O validador verifica integridade de metadados, não a implantação real dos controles.
