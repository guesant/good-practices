# Avaliação de boas práticas — [Nome do projeto]

**Projeto:** [URL ou caminho]

**Versão/release:** [commit/tag]  
**Data:** [AAAA-MM-DD]  
**Responsável:** [pessoa ou equipe]  
**Revisor independente, se necessário:** [pessoa/equipe]  
**Perfis selecionados:** [all, web, api, saas, ...]  
**Dados processados:** [públicos, internos, pessoais, sensíveis]  
**Exposição:** [público/interno, provedores, dependências]  
**Criticidade:** [baixa/média/alta com justificativa]  
**Objetivos de continuidade:** [RTO/RPO/SLO se aplicável]

## P0: avaliação de pré-implantação

- [ ] Todos os controles P0 aplicáveis foram executados e têm evidência verificável.
- [ ] Controles P0 classificados N/A possuem justificativa técnica.
- [ ] Não há exposição crítica, falha de autorização ou segredo sem mitigação.
- [ ] Riscos residuais e exceções têm aprovação, escopo, compensação e prazo.
- [ ] Backup, rollback, alertas e responsáveis foram testados conforme criticidade.

## Registro de controles

| ID | Aplicabilidade | Prioridade | Estado | Responsável | Verificação | Evidência | Reavaliar |
| --- | --- | --- | --- | --- | --- | --- | --- |
| API-01 | Aplicável | P0 | Pendente | [owner] | Validar contrato em CI | [link] | [data] |
| ASVS-03 | Aplicável | P0 | Pendente | [owner] | Testar acesso cruzado | [link] | [data] |
| OBS-01 | Aplicável | P0 | Pendente | [owner] | Interromper monitoring em teste | [link] | [data] |
| FIN-02 | N/A | P0 | Justificado | [owner] | Não há cobrança variável | [justificativa] | [data] |

Estados sugeridos: `pending`, `passed`, `failed`, `not_applicable`, `exception`. Não marque `passed` apenas porque uma ferramenta está instalada.

## Registro de exceção

**Controle:** [ID]  
**Risco e impacto:** [descrição]  
**Motivo de impossibilidade:** [descrição]  
**Mitigação compensatória:** [descrição]  
**Aprovador:** [responsável]  
**Validade:** [data]  
**Revisão ou ação corretiva:** [link para issue]

## GO / NO-GO

**Decisão:** [GO / NO-GO / GO condicional]  
**Data e responsável:** [informação]  
**Versão efetivamente publicada:** [hash/artefato]  
**Janela de observação:** [intervalo conforme risco]  
**Ação de rollback:** [runbook]  
**Próxima revisão:** [data]

## Pós-implantação

- [ ] Versão publicada confirmada por hash/commit.
- [ ] Smoke tests externos e autorização executados.
- [ ] Logs, métricas, alertas e custos avaliados.
- [ ] Incidentes, regressões e decisões documentados.
- [ ] Controles pendentes programados com responsáveis.

Este formulário não substitui as avaliações oficiais de normas, legislação ou certificações.
