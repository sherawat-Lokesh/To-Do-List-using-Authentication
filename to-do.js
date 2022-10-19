"use strict";
import { showDate } from "./dom.js";

const date = new Date();

showDate.textContent = date.getDay();
