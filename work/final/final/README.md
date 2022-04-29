# SV INFO 6150 Final Project

Yisheng Tang, NUID #002193735

## Introduction

This project displays some of my photos while travelling as well as a breif introduction to the scene at California, including Monterey, Half Moon Bay, and Santa Cruz

## Technology Used

- Complex UI:
  - Expanding sub-navigation-menu on the `NavBar` named Locations
  - Accordion on Home page – `FAQ` section
  - A realtime clock on the bottom of the page
- Loading Indicator: User can see a loading indicator on `Comment Board` section on the first load
- Animation & Transition
  - Navigation Bar Sub-menu uses a CSS animation
  - Home - FAQ uses a CSS transition of `max-height`
- Form validation: Forms in both `Comment Board` and `Newsletter` have from validation from JavaScript
  - The Validation will run after user key in anything in the field, and if the validation fails, the border goes red and will notify user with an error message when trying to submit
  - The email validation uses a Regex from stackoverflow: https://stackoverflow.com/questions/41348459/regex-in-react-email-validation


## Section introduction

- Home: Home page of the app, with 3 cards showing the Location and a FAQ section
- Locations: The detailed introduction to 3 beatiful scenes in California with some pictures by myself
- Comment Board: A comment board connected to self-hosted RESTful service, feel free to lieave a comment about your thought. (Hope my server will not crash xD)
- Newsletter: A `form` allows you to subscribe to the newsletter. Afte you submit your information, the app will show a welcome message under the navigation bar.

## Image Licencing
1. Photos are licensed under the CC BY-NC-SA 4.0 License.Copyright 1999-2022 Yisheng Tang.

2. preview_monterey is released to the public domain.Meij.kobayashi, Public domain, via Wikimedia Commons

3. Downtown_santa_cruz,_cropped_(cropped) is licenced under CC BY-SA 3.0.Aaronbrick, CC BY-SA 3.0, via Wikimedia Commons Referrence

4. The_Ritz-Carlton_-_Half_Moon_Bay,_CA_(San_Matteo_Coast)_-_panoramio_(1) is licenced under CC BY 3.0.MARELBU, CC BY 3.0, via Wikimedia Commons

5. Spinner are licensed under The MIT License (MIT). Copyright © 2019-2020 css.gg