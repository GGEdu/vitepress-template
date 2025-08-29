<!-- Eliminar el sidebar y debe quedar en la linea 1
---
sidebar: false
---
-->
# Plantilla de ejemplo VitePress

¡Bienvenido! Esta página es una plantilla de demostración que muestra la variedad de elementos que puedes utilizar en tu documentación con VitePress.

---

## Títulos y secciones

## Título nivel 1

## Título nivel 2

### Título nivel 3

---

## Listas

- Elemento de lista
- Otro elemento
  - Subelemento

1. Elemento numerado
2. Segundo elemento

---

## Tabla

| Nombre       | Tipo         | Valor        |
|--------------|--------------|-------------|
| edad         | numérico     | 30          |
| IVA          | numèric      | 0.21        |
| DOMINIO_GMAIL| alfanumérico | "gmail.com" |

---

## Bloque de código

```plaintext
- Nombre del dato: edad
- Tipo de dato: numérico
- Valor del dato: 30
```

```md
<script setup>
import { useData } from 'vitepress'
const { theme, page, frontmatter } = useData()
</script>
```

---

## Imagen

![Logo CC](/img/logo-cc.png){logo}

---

## Bloque de cita

> Ejemplo de cita: "Los programas son como recetas detalladas que le dicen al ordenador exactamente qué hacer."

---

## Bloque de información

::: info
Esta es una caja de información.
:::

::: tip
Esta es una caja de consejo.
:::

::: warning
Esta es una caja de aviso.
:::

::: danger
Esta es una caja de peligro.
:::

---

## Detalles expandibles

::: details Ejemplo de detalles
Esta sección se puede expandir para mostrar más información.
:::

---

## Pestañas


::: tabs
== Pestanya 1

Esta sección es para mostrar información relacionada con la pestaña 1.

== Pestanya 2

Esta sección es para mostrar información relacionada con la pestaña 2.

:::

---

## Diagramas Mermaid

Puedes crear diagramas usando Mermaid simplemente escribiendo código en un bloque de código con el tipo `mermaid`:

```text
graph TD
    A[Inicio] --> B{¿Es par?}
    B -->|Sí| C[Dividir por 2]
    B -->|No| D[Multiplicar por 3 y sumar 1]
    C --> E[Fin]
    D --> E
```

```mermaid
graph TD
    A[Inicio] --> B{¿Es par?}
    B -->|Sí| C[Dividir por 2]
    B -->|No| D[Multiplicar por 3 y sumar 1]
    C --> E[Fin]
    D --> E
```

También puedes crear diagramas de flujo más complejos:

```text
sequenceDiagram
    participant Usuario
    participant Sistema
    participant BaseDatos
    
    Usuario->>Sistema: Solicitar datos
    Sistema->>BaseDatos: Consulta SQL
    BaseDatos-->>Sistema: Resultado
    Sistema-->>Usuario: Respuesta
```

```mermaid
sequenceDiagram
    participant Usuario
    participant Sistema
    participant BaseDatos
    
    Usuario->>Sistema: Solicitar datos
    Sistema->>BaseDatos: Consulta SQL
    BaseDatos-->>Sistema: Resultado
    Sistema-->>Usuario: Respuesta
```

Incluso mapas mentales:

```text
mindmap
  root((Geografía))
    Continentes
      África
      América
      Asia
      Europa
      Oceanía
      Antártida
    Elementos Naturales
      Ríos
      Montañas
      Climas
      Océanos
    Temas Humanos
      Población
      Economía
      Ciudades
```

```mermaid
mindmap
  root((Geografía))
    Continentes
      África
      América
      Asia
      Europa
      Oceanía
      Antártida
    Elementos Naturales
      Ríos
      Montañas
      Climas
      Océanos
    Temas Humanos
      Población
      Economía
      Ciudades
```

---

## Enlace a la documentación de la API

Consulta la [documentación de la API de VitePress](https://vitepress.dev/reference/runtime-api#usedata).

---
Esta plantilla muestra la mayoría de elementos que puedes utilizar en tu documentación. Puedes eliminar o modificar libremente este contenido.
