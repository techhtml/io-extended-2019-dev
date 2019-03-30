import { h, render, Component } from 'preact';
import { Link } from 'preact-router/match';
import style from './style';

class Hero extends Component {
    constructor() {
        super();
    }

    render() {
        const MetaInfo = this.props.meta ? <p class="io-ext-meta">{this.props.meta}</p> : null;
        
        return (
            <section class="io-ext-section">
                <div class="io-ext-logo">
                    <svg aria-hidden="true" width="101" height="74" viewBox="0 0 202 146" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                            <path id="svg-IOLogo-1HP3x0F" d="M.158.39H107.28v106.92H.158z"></path>
                            <path id="svg-IOLogo-2gMqZt5" d="M.105.557h38.004v144.574H.105z"></path>
                        </defs>
                        <g fill="none" fill-rule="evenodd">
                            <path fill="#D3E3F9" d="M0 123.16h51.714V19.926H0z"></path>
                            <g transform="translate(94.034 17.693)">
                                <path d="M53.72.39C24.138.39.157 24.325.157 53.85c0 29.525 23.98 53.46 53.561 53.46 29.582 0 53.562-23.935 53.562-53.46C107.28 24.326 83.3.39 53.719.39m0 5.214c26.653 0 48.338 21.643 48.338 48.247 0 26.601-21.685 48.245-48.338 48.245-26.652 0-48.337-21.644-48.337-48.245 0-26.604 21.685-48.247 48.337-48.247" fill="#4285F4" mask="url(#svg-IOLogo-1GJnE3E)"></path>
                            </g>
                            <g transform="translate(58.336 .312)">
                                <path fill="#5BB974" mask="url(#svg-IOLogo-3Uw-mEh)" d="M5.625 145.131l-5.52-1.247L32.588.557l5.52 1.246z"></path>
                            </g>
                        </g>
                    </svg>
                </div>
                <h1 class="io-ext-banner">
                    {this.props.title}
                </h1>
                {MetaInfo}
            </section>
        )
    }
}

export default Hero;
