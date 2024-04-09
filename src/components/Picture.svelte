<script>
  let className = ""
  export { className as class }
  export let src

  const images = Array.isArray(src) ? src : [src]

  const svgImage = images.find(i => i.type === "svg" || images[0])
  const defaultImage =
    images.find(i => ["avif", "webp", "png", "jpg"].includes(i.type)) || images[0]
  const remainingImages = images.filter(i => i.img !== defaultImage.img)

  const resolutions = ['640w', '2x', '3x']
  let srcsetAttribute = ''
  for (let image of remainingImages) {
    for (let i = 0; i < resolutions.length; i++) {
      srcsetAttribute = srcsetAttribute.concat(`${image.img} type="image/${image.type}" ${resolutions[i]},`)
    }
    srcsetAttribute = srcsetAttribute.slice(0, srcsetAttribute.length-1)
  }

</script>

<picture>
  <img class="h-full object-cover {className}" src={defaultImage.img} alt={defaultImage.alt} />
  {#each remainingImages as image, i}
    <source srcset={srcsetAttribute}/>
  {/each}
</picture>
