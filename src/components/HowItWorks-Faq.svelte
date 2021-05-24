<script>
  import { onMount } from 'svelte'
  import Picture from "./Picture.svelte"

  export let id
  export let question
  export let answers

  onMount(() => {
    // Reset the radio buttons when clicked
    const qaRadioButtons = window.document.getElementsByName('qanda');
    let setCheck;
    for (let i = 0; i < qaRadioButtons.length; i++) {
      qaRadioButtons[i].onclick = function() {
        if (setCheck != this) {
          setCheck = this;
        } else {
          this.checked = false;
          setCheck = null;
        }
      };
    }
  })

  // Accordion logic is based on https://www.tailwindtoolbox.com/components/accordion
  const toggleAnswer = (event) => {
    const inputElement = document.getElementById(`${ event.target.htmlFor }`)
    if (typeof inputElement !== 'undefined' && inputElement !== null) {
      inputElement.checked = inputElement.checked ? false : true

      const suffixStart = event.target.htmlFor.indexOf('-')+1
      const answerId = event.target.htmlFor.substring(suffixStart)
      const answerElement = document.getElementById(`answer-${ answerId }`)
      answerElement.style.maxHeight = inputElement.checked ? "100vh" : "0vh"
    }
  }

  // Add `<a href="mailto:..." tag if the answer contains the $$email$$ string
  // TODO: This only works when the `$$email$$ sentinel is the last item in the
  // last element of the `answers` array. This needs to be update so it supports
  // the sentinel being in any position in any array element.
  let containsEmail = false
  answers = answers.map(answer => {
    if (answer.includes('$$email$$')) {
      containsEmail = true
      return answer.replace('$$email$$','')
    } else {
      return answer
    }
  })


</script>

<style>
  /* Tab content - closed */
  .tab-content {
    max-height: 0;
    -webkit-transition: max-height .35s;
    -o-transition: max-height .35s;
    transition: max-height .35s;
  }
  /* :checked - resize to full height */
  .tab input:checked ~ .tab-content {
    max-height: 100vh;
  }
  /* Label formatting when open */
  .tab input:checked + label{
    font-size: 1.25rem; /* .text-xl */
    padding: 1.25rem; /* .p-5 */
    border-left-width: 2px; /* .border-l-2 */
    border-color: #68d391; /* .border-green-400 */
    background-color: #f8fafc; /* .bg-gray-100 */
  }
  /* Icon */
  .tab label::after {
    float: left;
    right: 0;
    top: 0;
    display: block;
    width: 1.5em;
    height: 1.5em;
    line-height: 1.5;
    font-size: 1.25rem;
    text-align: center;
    -webkit-transition: all .35s;
    -o-transition: all .35s;
    transition: all .35s;
  }

</style>

<div class="max-w-screen-xl mx-auto m-auto justify-center text-2xl text-gray-700">

  <div class="tab w-full overflow-hidden" on:click={ toggleAnswer } >
    <input class="absolute opacity-0" id="question-{ id }" type="radio" 
      name="qanda">
    <div class="flex items-center mt-3 pb-3">
      <label class="block p-5 leading-normal cursor-pointer 
        text-xl md:text-2xl font-bold text-green-600 pr-3" for="question-{ id }">
        > { question }
      </label>
    </div>
    <div class="tab-content overflow-hidden border-l-2 bg-gray-100 
      border-green-400 leading-normal" id="answer-{ id }">
      <div class="items-center pb-4">
        {#each answers as answer, index}
          <div class="pl-6 pr-6 pt-4">
            { answer }
            {#if containsEmail}
              <a
                href="mailto:support@chingu.io"
                target="_blank"
                rel="noreferrer noopener"
                class="text-green-500 hover:text-green-900">
                support@chingu.io
              </a>
            {/if}
          </div>
        {/each}
      </div>
    </div>
  </div>
</div>