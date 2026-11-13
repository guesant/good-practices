# Catálogo de controles estruturados

Os arquivos `*-controls.json` complementam o [checklist central](../README.md) e permitem aplicar filtros por perfil, prioridade e verificação. Os controles são identificados por IDs **próprios do projeto**, não pelos identificadores oficiais de ASVS, NIST ou ISO.

## Conteúdo

- [Contratos, ASVS/SAMM/OpenSSF, resiliência e observabilidade](assurance-resilience-controls.json)
- [Custos, domínios/e-mail, descomissionamento e portabilidade](operations-lifecycle-controls.json)
- [Testes, acessibilidade, privacidade e IA](quality-privacy-ai-controls.json)
- [Perfis de aplicação](profiles.json)
- [JSON Schema de controle](schema.json)
- [Guia de adoção](../docs/control-catalog-and-profiles.md)
- [Template para avaliação por projeto](../templates/project-assessment.md)

## Como usar

1. Selecione um tipo de projeto e overlays de risco em `profiles.json`.
2. Filtre por tags de perfil, mas avalie cada item manualmente; tags não são determinação legal de aplicabilidade.
3. Registre prioridade, estado, responsável, evidência, data da última validação e exceções.
4. Execute `node scripts/validate-catalog.mjs` na raiz do repositório.
5. Não confunda validação de metadados com execução dos requisitos sobre uma aplicação.

**Cobertura:** este é um catálogo incremental dos controles adicionados na expansão mais recente. Os controles históricos do README não estão todos normalizados em JSON. A migração futura deve manter seus IDs e evitar duplicações.
