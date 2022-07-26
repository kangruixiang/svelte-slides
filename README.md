# Reveal.js + Svelte + Vite

This template should help get you started developing awesome slide decks using [Reveal.js](https://revealjs.com) with Svelte in Vite.

## How does it work?
- Your slides are both Svelte components and Reveal.js slides.
- Create new slides as Svelte components under `src/slides`
- Just import and include your components inside the `src/Presentation.svelte` component
- That's it, you are good to go.

## Configuring Reveal.js
You can customize the `Reveal.js` setup in `src/config.js`.


## Sample slide
### src/Title.svelte
```html
<section>
<h1>This is a sample slide</h1>
<ul>
<li>Apples</li>
<li>Oranges</li>
<li>Grapes</li>
</ul>

<h2>Sample code</h2>
    <pre>
    <code data-line-numbers data-trim data-no-escape>
    {
    `const name = "hello world";
    if(name === 'hello') {
      console.log('world');
    }
    `
    }
    </code>
    </pre>
</section>
```

### src/Presentation.svelte
```html
<script>
    import Title          from './slides/Title.svelte';
    import Love           from './slides/Love.svelte';
    import GettingStarted from './slides/GettingStarted.svelte';

    const partner = ['Svelte', 'Reveal.js'];
</script>

<Title/>
<Love {partner}/>
<GettingStarted/>

```

## Inspiration
This project is inspired by [svelte-reveal-boilerplate](https://github.com/micschwarz/svelte-reveal-boilerplate/) 

## Recommended IDE Setup

[VS Code](https://code.visualstudio.com/) + [Svelte](https://marketplace.visualstudio.com/items?itemName=svelte.svelte-vscode).

## References
- [Svelte](https://svelte.dev)
- [Vite.js](https://vitejs.dev)
- [Reveal.js](https://revealjs.com)

