<template>
  <div
    class="py-20 bg-black bg-opacity-50 bg-fixed border-4 border-white mt-20 mx-10"
  >
    <!-- Heading -->

    <div>
      <h2 class="text-5xl text-white font-bold text-center">Why Buy From Us</h2>
    </div>

    <!-- Boxes -->

    <div
      class="text-white grid grid-flow-row-dense lg:grid-cols-3 lg:gap-y-10 md:grid-cols-2 sm:grid-cols-1 grid-rows-2 gap-5 place-items-center lg:w-2/3 md:w-2/3 sm:w-5/6 mx-auto my-10"
    >
      <!-- Block 1 -->

      <div class="w-full h-full border-2 border-white p-5">
        <!-- icon -->

        <img
          class="h-16 w-auto mx-auto"
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAABmJLR0QA/wD/AP+gvaeTAAACrUlEQVR4nO3dX2rVQBgF8DMirUtQ3FBB8E+xbkd86nUXim8qLQiFbqipSxBBjg9JUcvtpfnmi2dy5/weC8kd52Qyzj8CmJmZmd0XyQOS70kOJK9IbkgeqMvVjanCb9uoy9WN6cm/7VpdroiiLkAESW77eylldf+eB+oCZNrSKjIMJE+X6mNW98QAd7eAhV0CeFVK+ZF5071qAQs7AnBO8lHmTR3APOkhOID5UkNwADFpITiAuJQQHECd6hAcQL0jAF+j4wQHkOMZgLeRCz0QyzOUUp7OvcgtIE/ooXAAeT5GLvIrKMcFgONSys+5F7oF1LsE8DpS+YADqFU9Q7pIABzXbDd3rFxVW6LMARcAXtZOT6f3AdOA5AuA59n3bkja2kBqAK78+dICcOXHpATgyo+r7oRJHgI4w/5W/gDgFMCL7MoHgIc1F09P/meMk1FyXW1L6eS1s7hQC5gq/wyNPPlrFm0B7+DKTxF6Z3Lch/k4uSzVeuoDWpkOWL1oAB9SS9Gx6CuoyU64m1fQNPd9DOBbbnH6Ex4HTCGcwCFUqZqKmEJ4g3FuXG6JtQeu4XxAJ6PiRSbjPB09T5vT0TccwnxekoxJCyF9Uf6v/x1tMM6l76ObDbmHtTda3cAFaGpjVpvbUjri8wEN8PmABvh8QAN8PkDM5wPEfD5AyOcDhHw+QMgDMaGU+SAHENPuZFwHUqejHcA86QsyDuD+2jwf0IF2zwe0ppuNWZbHAYg5ADEHIOYAxByAmAMQcwBiDkDMAYg5ADEHIOYAxByAmAMQcwBiDkDMAYg5ADEHIOYAxCQB8N/vAc+2474R/X2PmNu/B6wm+R6xZB8NyQHAE8Vv7/C9lPLfy6TqA1o74QIAvxQ/qgrgk+h3d2mxTMvgnw88XGlf+yR77ITNzMwM+A2MK812ooDV2QAAAABJRU5ErkJggg=="
        />

        <!-- Heading -->

        <h2 class="text-xl text-center font-bold mt-5 mx-auto">
          OUR PHILOSOPHY
        </h2>

        <!-- Text -->

        <p class="text-justify my-5 mx-auto">
          We exist to provide our clients with the most exacting restoration
          parts on the market from the greatest number of suppliers, allowing
          you to choose the right quality and price point for your project.
        </p>
      </div>

      <!-- Block 2 -->

      <div class="w-full h-full border-2 border-white p-5">
        <!-- icon -->

        <img class="h-16 w-auto mx-auto" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAABmJLR0QA/wD/AP+gvaeTAAAEbUlEQVR4nO2av28cRRTHvxOLIwEcEHAh544G0SbIREYKKImTCPgLaIgpsGkpkBASFUgx0QGiIwYaIySERBLJoiBIFPwoEEJIDsgJaSh8cRGKKAIFBzsfin2bG+/t7u3d7e6dYb/N7bz35s28786bnR8nVahQoUKFChUqlASgBrwFXCF/tIB5oDbsOBNhHSwaJ7P2xxUZbByAK5IaBTez5pybyGI4DAIoox3nXOmxVdiOGOlhEk2XIob1jrwdbjdUBAy7AxUq/M8APA9cK2gJ/O2w40sEcB/wSUGB38aw44wFcBxYzTPAbuWRAHA38D5wK4/gByHA1B0pUthKEDggaVHSI0W1EYek1WJITuGbJOAO4E1go8eXeyLG10y/IyTGV6o+r+D3AT9l7OsqcI6AqFvArhh/u0y3YbZd55HCCQC+zxhgGlaAhvk7Bizbc92zqZtsGThmz3ut7lAJGBQXveB32O9u+5307CYjutC2kUZCrwSUsReYcVvxqHNuDTgi6SIw5Zy7brb7vXr7JMk5dx2YknQJmHbOrUk6LKlVQt87keENZ8ntO4G/zOYz4GXgNHDD83MDWACawLrJLgNj5uNcHiMgbwJWgL1ml5Tb95pshXZuN4CPgGngQeB+q3/eq7dOMBJC35ujRoA/saXl9v6ILjUNCT6pAE0rjwMXkjoxMAHYLN8jAate8NPAb9jbMtmcZ/uiJ3+CYFhPW7kG/ABcBd7FLjiAr4GFSD92ErNOSAq4FwIyMRnBWdONWUAQDNkm8bl9GngbuGmypNx+x2TPWL1ZgtFUT+rPsAjYpJ3PU7QnLYCzwFME+4Jx4BCw5OnTcvsPkz/QLdCs/S6KAAjyctxsmiZ7JcXPa2aTlttXTVePyEeKgBPAzojNAnDGnv3L0C2XlwQjIS23T5nsWXpMgdII8OR169ycdfZJk8ddhs6b7nBKYPMEGysHfJVA1AujREAUd5m8FaNrmW48LQAL/g1TlfYZLJOA3Sn+nga+9FSFLITy3AvskfS4pDlJf0t6zOQfx9gu2u+kpHVJL1ndPZ7NGUm/S2pKuimpJmkRGHPOnZe0lGPf2+h1BBBMWHGTYLg2qBHkc4vOSfAL4MNI3TC3Zz3ZFMHiKlwwNUg4G+g3rkTDpHIMlun8DL6a0s7rZuPn9rLnr5TtcF4EbABHTR9dCC0RLH7usSCPELz5EH5uH6V9lBYeiFxg66ZpkAORb3omIEkfQdpSeIEetrmRtqJHYnETaiYCMqNPAqKbocts3QzNerbR3L69GYppq+M7P6oEQPbtcFJuTxAcl3XDJnBw4EALIADgEjBhdoeAn+057rDzF+C4PT8E/JoheIDPCws+BwKgv+Purrntobi3nxMBUczE+Og5tw0/5h1vxzVRGHy3K6Yh4Tnn3Kd5OuybgFCfVC4ALUkPO+f+ydPpdvqP0Ht5By/FE/BdlorRuaLb3DEg/pT0QRGOOwhwzh3scoWciaAcsSnppHPuWsntVqhQoUKFChX+4/gXZaf7cTMUfEEAAAAASUVORK5CYII=">

        <!-- Heading -->

        <h2 class="text-xl text-center font-bold mt-5 mx-auto">
          MORE PARTS FROM MORE SUPPLIERS
        </h2>

        <!-- Text -->

        <p class="text-justify my-5 mx-auto">
          At the Camaro Part Guru we carry more restoration parts from more
          manufacturers, making us the most comprehensive Camaro parts store for
          all of your restoration needs.
        </p>
      </div>

      <!-- Block 3 -->

      <div class="w-full h-full border-2 border-white p-5">
        <!-- icon -->

        <img class="h-16 w-auto mx-auto" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAYAAACOEfKtAAAABmJLR0QA/wD/AP+gvaeTAAADsElEQVR4nO2ZvWsUQRiH34lRiAgiwY8U2kRBQVBEEQtJoWgKG8HSf8AmCBLQNoiFqF3AxkattBIFQUijptTCREQRK6NgDBbRIBrvscgsmdvs3e7szezu7c0DIbuT3ZnfPMy8u7kTCQQCgUAgEAgEAoFagKbsHEXQV3aAbqcnBPrcET0h0CdBYALANPAiy7VBYDINESnvIVi1p3CogRXGiUCbmlEF0vKWUQPLrRn2pOUNNdAk1MAK0++iE2BaRBpKqeMu+tN9KhE5p08fK6V+O+zbWV4nAsVPzVgnIg/08Q4RcSZQyq5xabioOcAuVjlYdp5CyRsYOATcBRZYyw/gXh6ZpQu0fW+yDQz0AdeBRoK4OA3gmq6RWftvymM7n3ZkfQr7fm+aEJFxEYmkICIfjb9/NY6ViFzR9+SlPu+BwDDwx1hh08AeoN9o2w4cBl4bbX+Bva7zVAJLgZcNKfPAoG5vEqjbBoE5o/2q6zy2ZNrC8ZqQdm7JPuP4uVJqodWF+m8PjaZcT2eX88lbA9PObVhvHG9Ou1gpdVGtcibnmD7n0zmWW3jC2JLLwAndvmYLF5GnElgKPEDz68sf4BZwtDYCbWuGbWBgkvbcAEaBgZz5m/LUrQaKiIyJyGSbPi6JyFMR+Q7cAYY7GEukTjUwdt8x4AHwK2VFLgHnfecpjU4DAwPAKUPYfILEZWCkiDwdk7IaWtLhmOZTeIiV/0SexIZ4WdX8pQegWeAOo/2+0f4PSH13LCN/YgBnHWYbs5XAI7F57mvXT86xM8/X6jsRYFu+SC372x2TcSjDbYux8yXHmazmmFXgrP495VjiZ2kWcCHDPaeN4x8iMucqjJ7blD6dbXetdcfAjF4lMy4lsvIJtMlNYFPSFgbOAj+N9tsOc3ibo9cBgJ3At5jEReCZcf4IeB+75gtGbewwg195vgcCDgKfyM4HYL+jsYuR53tAVrbtOPC2hbQG8AoYAzY6GrNYeUUNrPsfMeSNAls8jFG8PCPAVuCNDvAOGHLcv7PPAxP6jmd3UkvzBPH5dFbASf2zwWG/5a68hEBeV6JLKrPy4nSDxMrKi6iyxMrLi6iixK6RF1EliV0nL6IKErtWXkSZErteXkQZEmsjL6JIibWTF1GExNrKi/ApsfbyInxI7Bl5ES4l9py8CBcSe1ZeRCcSe15eRB6JQV4MG4lBXguySAzyUmgnMcjLSJLEIM8S1n7pU50vgLqF2KoLKy8PhsQgLy96O4dtGwgEAoFAIIH/R03bG8+LzNYAAAAASUVORK5CYII=">
        
        <!-- Heading -->

        <h2 class="text-xl text-center font-bold mt-5 mx-auto">
          GUARANTEED LOWEST PRICES
        </h2>

        <!-- Text -->

        <p class="text-justify my-5 mx-auto">
          We guarantee that our prices are the lowest… period! Should you find a
          lower price for the same product anywhere on the internet, we will
          beat it.
        </p>
      </div>

      <!-- Block 4 -->

      <div class="w-full h-full border-2 border-white p-5">
        <!-- icon -->

        <img class="h-16 w-auto mx-auto" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAYAAACOEfKtAAAABmJLR0QA/wD/AP+gvaeTAAADPUlEQVR4nO2cv08UQRTH3yjBRgy1B1Zqa2mE2EssMP4BljT+qO2Mjah/Adppp2iliYVWEgIWGjuNsRKPgkiihzUfC2aT5bxd9u7Nzuwd75Nc7nZnZ+Y7j9nvvNmEFTEMwzCMUQE4BtwE1oG//rMG3ADGU+trNEAL+Ewxn4CTqXU2Ej/zsuB9AeaBCf+5Anz1ZR9tJvYAuJUL3mSP8slcEK+n0NhogA8+OPMl11z116zF1DYUADs+OBO5c6vASu74hL+mk0bl/xxJLSDHcRER59xO7tyuiJAdOOeywE2IsZ9smQ11XSxUMxAYBx4AmyWpRyUG6FtLG1gk5YoO3A8wkH1U6DM092LEqmgwbS/iQoC2+gpggP5mfFNtbVsaEUEG009bKfosI9kqDEwBy0BnkEH4sXeAl8CZOjTWzqB/QR+87QJPmimpN1tQZxtoxdIfjCIBdCXAPcqXfdVX2cDpb0Fa9HVawGt/7lko/dEoCeAK8L6kXsdXbeXOjQEPga2SwG35QB/N1Zv2Zb9D6Y/GoAKAP77qVAANSQOYahF557+XNEH0dZf84Vu1qtiU3MIHeeBZ4FfJrdov28DpUPr7oa4ZuO8hQDfOuW8ick5EnouI5slKR0ReiMh559x3RTtpSG7CSpo8Aw8NtQTwIA8cJZJ4oOExDzQPVGMeqCSqBwKXgZ/ABjBXU99RcZrKmX845yq1A2yISLZ123DOnepuqw6K9PWrvxfmgSkpWsWKPBCY87fvD+BSHJXFhFiFx0KJ6aKnBzrn3ojIdE19Dh+WB5oHqrE8UInthVPSr4c0LZEO4YGWSJeUV8E8UEnUPFBEFkTksS9byBdoZsHQYnmg5YFqzAOVWB6YEvPAyB7YtEQ6BLUk0sCqiOw65y52nbdEuiLmgVUYYC88ck+kh1uAksYuIpYH6jEPrILdwrYXVhPVA0cxkY79PHBJRLL/DXkkIkkT6RDUEsDuHYhRgCXSNQkYljywyauw5YFVSH4LKGnyDDw02F5YiXlgSswDzQPVWACVaAO4KbL3EpsAWqICzPqfqhfvaPfCT0XktoisDrEVPtFU1gbwjv++JiLD9m7TtuwF725qIYZhGMYh5R9b0hGMtA53qQAAAABJRU5ErkJggg==">

        <!-- Heading -->

        <h2 class="text-xl text-center font-bold mt-5 mx-auto">
          MORE INTUITIVE PART ORGANIZATION
        </h2>

        <!-- Text -->

        <p class="text-justify my-5 mx-auto">
          We organize our parts differently that most resellers, believing our
          organization is more reflective of how our restoration clients
          actually search for and buy their parts.
        </p>
      </div>

      <!-- Block 5 -->

      <div class="w-full h-full border-2 border-white p-5">
        <!-- icon -->

        <img class="h-16 w-auto mx-auto" src="data:image/png;base64,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">

        <!-- Heading -->

        <h2 class="text-xl text-center font-bold mt-5 mx-auto">
          GM PART & AIM NUMBERS
        </h2>

        <!-- Text -->

        <p class="text-justify my-5 mx-auto">
          To ensure that you are buying the right part for the right
          application, we have gone to great efforts to make sure most of our
          parts have the GM part number and the A.I.M. page number in their
          description.
        </p>
      </div>

      <!-- Block 6 -->

      <div class="w-full h-full border-2 border-white p-5">
        <!-- icon -->

        <img class="h-16 w-auto mx-auto" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAABmJLR0QA/wD/AP+gvaeTAAAJyElEQVR4nO2ceaxdRR3Hvz9aaAsCZbUUpEWbJi4FIlsiIqCg4oqxlEUUQRMrgUCLYNkKLdQKKGA1QQ0ooFEpGA2LGhEJEqwpQSiIggVSsK99QK08tm7wPv4xv8Odnnfufe/de+72Op/k5tyZ+c1yzu/MnJn5/c6REolEIpFIJBKJRCKRSCQSiUQikUiUjLW7AY0A7ClpsqSJkraS1CvpKTPraWvDtiSACcB84FGq8zhwGbB7u9s7YgHGAPOAVwoU8ALQC7yZi3/N84xud/tHFMDbgQeiC/088C3gEGCbSG6Ux813JWUsAd7ZznMYMbgynvEL+wZwOfC2IeQbByz0PADPApNb0eYRiw9TWc94GfjkMPPvAjwR9ZSH0vDVAP5gznrGJ4aZdxfgYc+/yX8A5zervSMaYA/gVb+I83Np44AbgX2q5I2VsRGYDlwbKfc9rTmLEQSwwC/g6viZ4cr4k6etyCulSBkevyPwksdf2erz6XoIa4nNeocr42425y2lVFOGp10a5Xm6HefUtQCToot3gMfFyugHriE86DOlHDBEZWTs0b4z7DKAI6LxfhRhthX3jDNc7tBIKf1DUMatVB7uH2vfGXYZwEl+0XqiuIXRhf0psJXHfwDoixR4YpQnVsZtwNZAj4dPbse5NRVge8KK+Sm/MxvlBC/3VA8/m6vv6kj2J5FSDgX+C3w+ks33jNEev8LjTvXwCSW0eyPhGixgCIvWpkCYtTxSwsnEZAr5uIfXE22NeFo1pewYyVRTxjZeJviQRTkKiXkY2KHe69rIqvVySftJ2ijpakl/kbSpgfIk6TE/LvPjGEnTJD2UCZjZbECSZknK7vKvmlmf/79U0iUufpukE83sDQ9P8zIl6RE/3ivp6AbbvbWkwyXNlrS/pPmSzm6wzKEDGLDW74gLmlRHNrTMq5I+oKfkesZictskhE1HaNK0F7jIy18DtM7WBIyPTvzAJtUxz8vvAcZUkYmVEg+fRcoYC6zy9EuKyiuhzQdGbRjfjDqqVbxrVPG0JtUxCdjgdVxWQy5WSqEyXC5b+a8H3tGkNk+L2rFrM+qoVnHTFeL1ZEPMRuAjNeROBm4GzgBGFaQfTWUW2JTe4fWMeIWMBZZ5Pa8AR9RRxpFUrIx/p8rwVwYjXiFe10QqBqpNwFxg3BDyjQMuoWKgeoYmb5dsEQrx+iYBD0Z1rgIuBPbLyRmwP2G2syqSXwpMakE7twyFeJ1jgCuBdWzOeuA5/63Ppb0OXEETh6lcG7cchUR17wlcBSynOstdeRNb3LaGFdJ19mV3gjtX0rnAuyRNkTTBk3slLTezZ9rVvkbpOoXEmNnTkkaUsaktCiGsFfaUtJeknSWtldQjqSfad9oiaalCgGMkzZD0KUlFY+xa4C5Jt0q608xoZfu6luE+1An2itjzMObVKvFLqWMh2E66YpYFzGFzn9t7gNOBqfgCj7AinwJ8DfgjFXNsP2GTsSu89DtaIYRF2g25O/6DQyz/kFyP+iVuiBpi/pkE80Arfl+P6u1ohcyNZH4OjC2QGUuw6A2wsAGjgW9HZSwcRvvOpnXMiurtzHUI8FFJl3rwR2Y2s4rotZKmS9ogaTOnA59tzSGYcGf5/yVmdvsQmnCXwqytFSwbXKTJUKOHECx32Q7t/cDWVco4PnennVZFbhQVT8Unq5XXCXRqDzle0r6S+iWdaWYD7OyEFfaPPfi6pG0lfR/4m5n9M5Y1szeBMyU9KmmqpFMkXR+Vtb2kE1XMcjO7F9hO0hdyaX1mdktUziEKPgLDZYmZPTa4WBMZpIfc4fG3FuR7P+G5sNJlegizrWx7fTXwHeBgcjMr4CaX+XMufp+igd252WX2Kkh7MlfOFTXKqUXnPkMIPklHeXCxx+0taaak4xT2nTLelHSymf2b4P5zv8Ke1Dn+W0FQ6g99b2qxpC9JOgzY2czWejkbFHml5Fjhx40FMs/lwj01yqnF83XkKReq9BCCFyGE9cMOkWxsm/gXwTT73lyZU4GLgcci2TWEN22zGVlmhj1KHUgZPaTeiqspZLrHvZiTP5rKYm/uIGWfE5U9I5f2rMefUu4ZlUPHDVmSsteQN1OImd0NLJJ0lqSLgbvNbEk+M8ECuMCDN5jZ4pzI85L2juoRwRL4cEntr4cLzey6sgorWyF9ftyxIG2OpA8reA8u8P955it4Fi5Xsedf5uvUF8VtJWmnehpbEgMWvI1QtkJW+XF3YHS8lW5m64FfSFqoMM0tYjs/LjazV+MEwqwrswCuipJeUNhBbhelLgzLVsgTkvByD5V0Xy6934+jgN0kfVrSYZL+KukOhbtdCjOwPAeqorC31ipm9prCdv2IoFSFmNlq4EFJB0s6VgMVkl3ofSWtlpQ5tX1ZQVnZIrJfAznWj4/HJlrqXxjmWWdmP/Myj1PxMLjBzG4apJzWU22W5Wnf9Pg+7wVxWn7T7xXCtshLufiLcvnGE97/gIFv5Na7MMzTG5X5jyoya1UDOnCWJUnXSfqGgkVwnqTTo7R+hTH/dkm/lXSPP1u2kXSkpM9J+owGDllzFUy9fZIW5dI2Sarm1JDN9t6oIZOxJvq/UlKRM15fQVz7YZDtd+CsKP2LUfx4BrFrEDYnx0fh6VTWMHPKPZNyKaOH1FvxYAoZBdzp6evILfCGUc9nCV/0gWBp7GgvmU4dsrId2pMkPSDpfZJ+BRwkaV5+OlsEsK2kCySdrzDzWi5pRpFHCrCXBk4ehsO7zWxjA/nbz2A9JJLbiWAjz+gFziNsvxfJTwZmU3lTFuA+cpODXJ5aD/WhUJqbaRk9pC7nAa8se2DuW8se4MPMBZLOU2UdIYWH7EqF7ZDdFHy04t3g1yVdo9Crqr67SJjSDuvDNDl+bWZF0+xh4zfnox7czczW1JIvjaH2kFyeCYSvL6ykNquBHxCGoq6ijB7SsoekmfVKmgXMlnSQwtuqExU2Cl9UWCg+ImlpWXdsN9LyWYt7Iy71XyLHkH2dEq0hKaTDSArpMJJCOox6FbIh+l/3h1ZGILGldH1La6byLZIbWlpxB0P4jhdA3a/UNTLtXSTpu5JOA6YofFVnXQPlDZeXJV0fr+KBmSq25zebcQo+Aod5+HstbwFhm/zmYe0alc8Soq9VU/GAbCc3MoxXJ/I0/CIM4WvTM1RxQGgFoyV9SOEZ+D9JXzGz3xCGin0UbO6rauRvBj2SbjGz37e43s6A4HzX63dlP7AI+I+HCz3pE00G2B34Q8Gw0bUK6ep1iJm9IOkYBSe8ItehRLsADqeytZ96SLsxs/sUtvR/1+62JCIIb/9OGFwykUgkEolEIpFIJBKJRCKRSCQSicQWwv8BaO9iW/0vtMIAAAAASUVORK5CYII=">

        <!-- Heading -->

        <h2 class="text-xl text-center font-bold mt-5 mx-auto">
          YOUR INPUT MATTERS
        </h2>

        <!-- Text -->

        <p class="text-justify my-5 mx-auto">
          This website is deigned to be a shared resource, causing us to seek
          our client's input, be it concerning new products or new
          manufacturers, data corrections or contributing to our community
          databases.
        </p>
      </div>
    </div>
  </div>
</template>
