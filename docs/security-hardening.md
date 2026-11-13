# Hardening: identidades, endpoints, chaves, ambientes, CI e produção

Checklist genérico adaptável a projetos pessoais, organizações, repositórios open source, serviços e infraestrutura. **Nenhum destes controles é universalmente obrigatório**: selecionar a baseline a partir do modelo de ameaças, dados e risco. Um arquivo de configuração presente não comprova sua eficácia.

**Referências centrais:** [NIST CSF 2.0](https://www.nist.gov/cyberframework), [NIST SP 800-53 Rev. 5](https://csrc.nist.gov/pubs/sp/800/53/r5/final), [NIST SP 800-63B-4](https://csrc.nist.gov/pubs/sp/800/63/b/4/final), [NIST SP 800-57 Part 1 Rev. 5](https://csrc.nist.gov/pubs/sp/800/57/pt1/r5/final), [NIST SP 800-207](https://csrc.nist.gov/pubs/sp/800/207/final), [NIST SSDF](https://csrc.nist.gov/pubs/sp/800/218/final), [OWASP ASVS](https://owasp.org/www-project-application-security-verification-standard/), [CIS Benchmarks](https://www.cisecurity.org/cis-benchmarks).

## 1. Inventário, risco e delimitação de confiança

- [ ] Identificar ativos, fluxos de dados, dependências, provedores e suas criticidades.
- [ ] Classificar informações conforme sensibilidade, necessidade de integridade e disponibilidade.
- [ ] Definir ameaças, atores, superfícies de ataque, fronteiras de confiança e pressupostos.
- [ ] Registrar ameaças internas, acesso indevido, ransomware, roubo e comprometimento da cadeia de suprimentos.
- [ ] Elaborar diagrama de fluxo de dados e identificar exposição de informações sensíveis.
- [ ] Definir controles mínimos proporcionais a risco, criticidade e estágio.
- [ ] Definir prioridades, responsáveis, risco residual, evidências e prazos.
- [ ] Reavaliar após mudanças de arquitetura, dependências, permissões e incidentes.
- [ ] Revisar requisitos legais e contratuais sobre retenção, logs e tratamento de dados.

## 2. Identidade, MFA, FIDO2 e YubiKey

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

## 3. SSH, Git, certificados e proteção de chaves privadas

**Preferência de alto rigor:** não persistir **chaves privadas SSH de trabalho** em arquivos de `~/.ssh` quando houver armazenamento resistente à extração ou agente seguro. **Não é uma proibição universal estabelecida pelo NIST** e não se aplica à chave pública, `config`, `known_hosts` ou outros arquivos normais desse diretório.

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

## 4. Ciclo de vida de secrets, PKI e criptografia

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

## 5. Workstation, laptop e endpoints de desenvolvimento

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

## 6. Sandboxing e isolamento de código não confiável

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

## 7. SSH server, hosts, cloud e Kubernetes

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

## 8. Aplicação, API e banco de dados

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

## 9. CI/CD e supply chain

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

## 10. Monitoração, incidentes e recuperação

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

## 11. Verificação e evidências

Para cada controle, registrar **ID, risco, categoria, escopo, responsável, evidência, procedimento de teste, resultado, exceção, validade e data da revisão**.

- [ ] Realizar testes independentes dos controles considerados mais críticos.
- [ ] Separar check automatizado de avaliação manual e declarar limitações.
- [ ] Guardar relatórios de execução e anotar ferramentas e versões.
- [ ] Não declarar hardening ou conformidade efetivos apenas porque existe um arquivo de configuração.
- [ ] Reavaliar os controles quando houver mudança material de tecnologia ou de ameaça.

**Observação:** orientações específicas sobre YubiKey, storage da chave SSH e sandbox de desenvolvimento são opções de implementação para atingir objetivos de autenticação, proteção de chaves e isolamento. Elas não são exigências textuais universais do NIST ou da ISO.
