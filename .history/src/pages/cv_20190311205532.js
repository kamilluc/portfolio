import React from 'react'

const Cv = () => {
  return (
    <div class="columns">
      <div class="column is-full">
        <article class="message">
          <div class="message-header">
            <button class="button is-info is-medium">Pobierz PDF</button>
            <button class="delete is-large" aria-label="delete" />
          </div>
          <div class="message-body">
            <canvas id="the-canvas" />
          </div>
        </article>
      </div>
    </div>
  )
}
export default Cv
