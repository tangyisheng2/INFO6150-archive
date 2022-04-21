import '../css/home.css';
import '../css/licence.css';
function Licence() {
    return (
        <main className="main">
            <ul className="licence__list">
                <li key={'photo'} className="image__licence">
                    <p>
                        Photos are licensed under the CC BY-NC-SA 4.0 License.
                    </p>
                    <p>Copyright 1999-2022 Yisheng Tang.</p>
                </li>
                <li key={'monterey-preview'} className="image__licence">
                    <p>
                        preview_monterey is released to the public domain.
                        <a href="https://commons.wikimedia.org/wiki/File:MontereyBayAquariumBackview_(cropped).jpg">
                            Meij.kobayashi
                        </a>
                        , Public domain, via Wikimedia Commons
                    </p>
                </li>
                <li key={'santacruz-preview'} className="image__licence">
                    <p>
                        Downtown_santa_cruz,_cropped_(cropped) is licenced under
                        CC BY-SA 3.0.
                        <a href="https://commons.wikimedia.org/wiki/File:Downtown_santa_cruz,_cropped_(cropped).jpg">
                            Aaronbrick
                        </a>
                        ,{' '}
                        <a href="http://creativecommons.org/licenses/by-sa/3.0/">
                            CC BY-SA 3.0
                        </a>
                        , via Wikimedia Commons Referrence
                    </p>
                </li>
                <li key={'halfmoonbay-preview'} className="image__licence">
                    <p>
                        The_Ritz-Carlton_-_Half_Moon_Bay,_CA_(San_Matteo_Coast)_-_panoramio_(1)
                        is licenced under CC BY 3.0.
                        <a href="https://commons.wikimedia.org/wiki/File:The_Ritz-Carlton_-_Half_Moon_Bay,_CA_(San_Matteo_Coast)_-_panoramio_(1).jpg">
                            MARELBU
                        </a>
                        ,{' '}
                        <a href="https://creativecommons.org/licenses/by/3.0">
                            CC BY 3.0
                        </a>
                        , via Wikimedia Commons
                    </p>
                </li>
                <li key={'css.gg'} className="cssgg__licence">
                    <p>Spinner are licensed under The MIT License (MIT).</p>
                    <p>Copyright © 2019-2020 css.gg</p>
                </li>
            </ul>
        </main>
    );
}
export default Licence;
