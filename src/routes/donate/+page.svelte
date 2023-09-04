<script>
  import ApplyLink from "../../components/ApplyLink.svelte"
  import Hero from "../../components/Hero.svelte"
</script>

<Hero
  title="We do it for you..."
  subtitle="But we can't do it without you!"
  description="Our goal is to help Web Developers build experience regardless
    of their financial situation. But, doing this isn't free and we ask for your
    help in paying our bills to keep Chingu running and to help it grow."
  primaryText="Buy us a coffee for $2"
  primaryHref="https://www.buymeacoffee.com/chingu"
  secondaryText="Buy Chingu merchandise"
  secondaryHref="https://chingu.myspreadshop.com/"
  heroClass="object-center"
  images={[{ type: 'jpg', img: '/donate/katt-yukawa-K0E6E0a0R3A-unsplash.jpg', alt: 'How it Works' }]} />

<div class="pt-6 bg-white sm:pt-10">
  <div class="pt-6 pb-6 bg-orange-50 lg:pt-10 lg:pb-10">
    <div class="max-w-screen-xl px-4 mx-auto bg-orange-50 sm:px-6 lg:px-8">
      <div class="max-w-4xl mx-auto text-center">
        <h2
          class="text-3xl font-extrabold leading-9 text-gray-900 sm:text-4xl sm:leading-10">
          What does your donation pay for?
        </h2>
        <p class="mt-3 text-xl leading-7 text-gray-500 sm:mt-4">
          Your donation pays for the tools & services we use to manage Chingu. 
          Tools & services like our domain name and web hosts.
        </p>
        <p class="mt-3 text-xl leading-7 text-gray-500 sm:mt-4">
          Since our team are volunteers the one thing your donation doesn't
          pay for is salaries. This means 100% of your donation goes only to
          the things that directly add value to Chingus like you!
        </p>
      </div>
    </div>
  </div>
</div>

<div class="h-6 bg-white"/>

<div class="bg-green-50">
  <div
    class="max-w-screen-xl px-4 py-12 mx-auto sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
    <h2
      class="text-3xl font-extrabold leading-9 tracking-tight text-green-900 sm:text-4xl sm:leading-10">
      Ready to dive in?
      <br />
      <span class="text-green-600">Join Chingu today.</span>
    </h2>
    <div class="flex mt-8 lg:flex-shrink-0 lg:mt-0">
      <ApplyLink />
    </div>
  </div>
</div>
