<script>
  import ApplyLink from "../../components/ApplyLink.svelte"
  import Hero from "../../components/Hero.svelte"
  import Modal from "../../components/Modal.svelte";

  let isModalOpen = false;

  const openModal = () => {
    isModalOpen = true;
  };

  const closeModal = () => {
    isModalOpen = false;
  };
</script>

<Hero
  title="We do it for you..."
  subtitle="But we can't do it without you!"
  description="Our goal is to help Web Developers build experience regardless
    of their financial situation. But, doing this isn't free and we ask for your
    help in paying our bills to keep Chingu running and to help it grow."
  heroClass="object-center"
  images={[{ type: 'jpg', img: '/donate/tipjar.jpg', alt: 'Tip jar' }]} />

  <Modal isOpen={isModalOpen} close={closeModal}
/>

<div class="flex-auto items-center justify-center w-full bg-white mt-5 sm:mt-8 sm:flex sm:justify-center">
  <div class="mt-3 sm:mt-0 sm:ml-3">
    <a
      href="https://www.buymeacoffee.com/chingu" target="_blank"
      class="flex items-center justify-center w-full px-8 py-3 text-base font-medium text-white bg-green-600 border border-transparent rounded-md hover:bg-green-700 md:py-4 md:text-lg md:px-10">
      Buy us a coffee for $2
    </a>
  </div>
  <div class="mt-3 sm:mt-0 sm:ml-3">
    <a
      href="https://chingu.myspreadshop.com/" target="_blank"
      class="flex items-center justify-center w-full px-8 py-3 text-base font-medium text-green-700 bg-green-100 border border-transparent rounded-md hover:bg-green-200 md:py-4 md:text-lg md:px-10">
      Buy Chingu merchandise
    </a>
  </div>
</div>

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
      <ApplyLink primaryAction={openModal}/>
    </div>
  </div>
</div>
