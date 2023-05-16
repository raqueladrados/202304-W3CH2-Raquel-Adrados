import { King } from "./king";
import { Counselor } from "./counselor";
import { Squire } from "./squire";
import { Fighter } from "./fighter";

export const kingTemplate = (object: King) => ` <li class="character col">
        <div class="card character__card">
          <img src="img/joffrey.jpg" alt="${object.name} ${object.family}" class="character__picture card-img-top" />
          <div class="card-body">
            <h2 class="character__name card-title h4">${object.name} ${object.family}</h2>
            <div class="character__info">
              <ul class="list-unstyled">
                <li>Edad: ${object.age}</li>
                <li>
                  Estado:
                  <i class="fas fa-thumbs-down"></i>
                  <i class="fas fa-thumbs-up"></i>
                </li>
              </ul>
            </div>
            <div class="character__overlay">
              <ul class="list-unstyled">
                <li>Años de reinado: ${object.reignLength}</li>
              </ul>
              <div class="character__actions">
                <button class="character__action btn">habla</button>
                <button class="character__action btn">muere</button>
              </div>
            </div>
          </div>
          <i class="emoji"></i>
        </div>
      </li>`;

export const fighterTemplate = (object: Fighter) => ` <li class="character col">
        <div class="card character__card">
          <img src="img/jaime.jpg" alt="${object.name} ${object.family} del personaje" class="character__picture card-img-top" />
          <div class="card-body">
            <h2 class="character__name card-title h4">${object.name} ${object.family}</h2>
            <div class="character__info">
              <ul class="list-unstyled">
                <li>Edad: ${object.age}</li>
                <li>
                  Estado:
                  <i class="fas fa-thumbs-down"></i>
                  <i class="fas fa-thumbs-up"></i>
                </li>
              </ul>
            </div>
            <div class="character__overlay">
              <ul class="list-unstyled">
                <li>Arma: ${object.weapon}</li>
              </ul>
              <div class="character__actions">
                <button class="character__action btn">habla</button>
                <button class="character__action btn">muere</button>
              </div>
            </div>
          </div>
          <i class="emoji"></i>
        </div>
      </li>`;

export const counselorTemplate = (
  object: Counselor
) => `<li class="character col">
        <div class="card character__card">
          <img src="img/tyrion.jpg" alt="${object.name} ${object.family} del personaje" class="character__picture card-img-top" />
          <div class="card-body">
            <h2 class="character__name card-title h4">${object.name} ${object.family}</h2>
            <div class="character__info">
              <ul class="list-unstyled">
                <li>Edad: ${object.age}</li>
                <li>
                  Estado:
                  <i class="fas fa-thumbs-down"></i>
                  <i class="fas fa-thumbs-up"></i>
                </li>
              </ul>
            </div>
            <div class="character__overlay">
              <ul class="list-unstyled">
                <li>Asesora a: ${object.support.name}</li>
              </ul>
              <div class="character__actions">
                <button class="character__action btn">habla</button>
                <button class="character__action btn">muere</button>
              </div>
            </div>
          </div>
          <i class="emoji"></i>
        </div>
      </li>`;

export const squireTemplate = (object: Squire) => `<li class="character col">
        <div class="card character__card">
          <img src="img/bronn.jpg" alt="${object.name} ${object.family} del personaje" class="character__picture card-img-top" />
          <div class="card-body">
            <h2 class="character__name card-title h4">${object.name} ${object.family}</h2>
            <div class="character__info">
              <ul class="list-unstyled">
                <li>Edad: ${object.age}</li>
                <li>
                  Estado:
                  <i class="fas fa-thumbs-down"></i>
                  <i class="fas fa-thumbs-up"></i>
                </li>
              </ul>
            </div>
            <div class="character__overlay">
              <ul class="list-unstyled">
                <li>Peloteo: ${object.pelotismo}</li>
                <li>Sirve a: ${object.support.name}</li>
              </ul>
              <div class="character__actions">
                <button class="character__action btn">habla</button>
                <button class="character__action btn">muere</button>
              </div>
            </div>
          </div>
          <i class="emoji"></i>
        </div>
      </li>`;
