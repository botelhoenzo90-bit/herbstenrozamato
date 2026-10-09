<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

- Use imported Lovable Asset pointers for supplied photos so media stays CDN-hosted and replacements remain explicit.
- Keep site presentation in the global stylesheet and site Button variants so spacing and interactions share one design system.
- Use the shared siteGold Button variant for site action buttons and keep its shine in the global stylesheet, so all calls to action share one appearance without pulse effects.
- Use the shared Embla-backed Carousel for the clinic photo gallery so arrow, keyboard and swipe navigation use the existing controls.
- Keep the clinic address in the shared clinic-location module and use it for both the displayed address and Google Maps Embed place query, with the connector's public browser key, to prevent divergent destinations.
- Keep page-specific SEO metadata and factual business structured data on content routes, using the shared clinic address to avoid conflicting information.
- Derive sitemap URLs from explicit route staticData.sitemap decisions with the shared sitemap helper, so future public pages stay discoverable without manual URL lists.
