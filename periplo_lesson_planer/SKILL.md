---
name: periplo-lesson-planner
description: >
  Sistema de planeación de clases para Periplo. Usa esta skill SIEMPRE que
  Israel pida generar un plan semanal, lesson plan, DAY2DAY, o plan de clases.
  También activa cuando mencione nivel + semana (ej. "B1 Semana 2"), "arma el plan",
  "dame opciones para la semana", o "qué hacemos esta semana con [tema gramatical]".
---

# Periplo Lesson Planner

Sistema de 4 agentes que genera un plan semanal completo (Lunes a Sábado) para Periplo.
Cada agente aporta una perspectiva distinta. El Agente 4 integra las tres en una propuesta final.

---

## Información que necesitas antes de empezar

Confirma que tienes estos datos. Si falta alguno, pregúntalo antes de correr cualquier agente:

1. **Nivel y semana** — Ej: "B1 Semana 1", "A2 Semana 3"
2. **Tema gramatical** — Ej: "Modal Verbs (Can, Should, Must)"
3. **Vocab packs** — Ej: "Verbs Pack 1, Nouns Pack 1"
4. **Lecturas sugeridas** — Del archivo `periplo_reading_listening_plan.md`

---

## Flujo de ejecución

```
[Israel da nivel + semana + grammar + vocab]
        │
        ▼
┌───────────────┐
│   Agente 1    │  Genera plan base con juegos existentes en Periplo
│   agent1.md   │
└───────┬───────┘
        │
        ▼
┌───────────────┐    ┌───────────────┐
│   Agente 2    │    │   Agente 3    │  Corren con el output del Agente 1
│   agent2.md   │    │   agent3.md   │  (el 3 también ve lo del 2)
└───────┬───────┘    └───────┬───────┘
        │                    │
        └─────────┬──────────┘
                  ▼
        ┌───────────────┐
        │   Agente 4    │  Integra los 3 planes en una propuesta final
        │   agent4.md   │
        └───────┬───────┘
                │
                ▼
        Plan integrado + opción de ver trabajo individual de cada agente
```

---

## Cómo presentar los resultados

1. **Corre los 4 agentes en secuencia**
2. **Presenta directamente el output del Agente 4** — la propuesta integrada
3. **Al final, ofrece:** *"¿Quieres ver el plan individual del Agente 1, 2 o 3?"*
4. Si Israel pide ver uno, muéstralo completo

Israel siempre puede decir:
- *"Dame la versión del Agente 3"* → muestra ese plan completo
- *"¿Qué tomó el Agente 4 del Agente 2?"* → explica las decisiones de integración
- *"Modifica el miércoles"* → el Agente 4 ajusta solo ese día

---

## Archivos de referencia

Cada agente sabe qué documentos necesita. Los archivos viven en el repo de GitHub de Periplo:

| Archivo | Lo usa |
|---|---|
| `agents/agent1.md` | Las instrucciones del Agente 1 |
| `agents/agent2.md` | Las instrucciones del Agente 2 |
| `agents/agent3.md` | Las instrucciones del Agente 3 |
| `agents/agent4.md` | Las instrucciones del Agente 4 |
| `lesson-plans/DAY2DAY.md` | Formato de salida (todos los agentes) |
| `lesson-plans/Horarios_Hoja_2.csv` | Plan de estudios completo |
| `lesson-plans/periplo_reading_listening_plan.md` | Lecturas y listenings por semana |
| `Doc1_Periplo_Briefing_EN.md` | Lista de juegos y dashboards disponibles |

---

## Modo Banco

Cuando Israel diga **"usa el banco de ideas"**, salta directamente al Agente 4 en Modo Banco.
No corras los Agentes 1, 2 ni 3. El Agente 4 construye el plan desde `ideas-bank.md`.
Ver instrucciones completas en `agents/agent4.md`.
