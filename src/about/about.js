import "../vendor/normalize.css";
import "../style.css";
import { GITHUB_API_KEY } from '../js/constants/GITHUB_API_KEY';
import CommitCardList from '../js/componets/CommitCardList';
import CommitCard from '../js/componets/CommitCard';
import GitHubApi from '../js/modules/GitHubApi';

import 'swiper/swiper-bundle.css';
import Swiper, { Navigation, Pagination } from 'swiper';
Swiper.use([Navigation, Pagination]);




const commitCard = new CommitCard(document.querySelector('.js-gitCard'));
const gitHubApi = new GitHubApi(GITHUB_API_KEY);
const commitCardList = new CommitCardList(document.querySelector('.swiper-container'), commitCard, gitHubApi);

(async() => {
    try {
        await commitCardList.render();
        const swiper = new Swiper('.swiper-container', {
            slidesPerView: 4,
            spaceBetween: 50,
            centeredSlides: true,
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
        });
    } catch (err) {
        throw new Error(err);
    }
})();