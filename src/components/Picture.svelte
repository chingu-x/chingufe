<script>
  let className = "";
  export { className as class };
  export let src;

  const images = Array.isArray(src) ? src : [src];

  const svgImage = images.find(i => i.type === "svg" || images[0]);
  const defaultImage =
    images.find(i => ["png", "jpg"].includes(i.type)) || images[0];
  const remainingImages = images.filter(i => i.img !== defaultImage.img);
</script>

<picture>
  <img class="h-full object-fill {className}" src={defaultImage.img} alt={defaultImage.alt} style="object-fit: cover;"/>
  {#each remainingImages as image, i}
    <source srcset={image.img} type={`image/${image.type}`} />
  {/each}
</picture>
