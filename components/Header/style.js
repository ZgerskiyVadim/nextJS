export default () => (
    <style jsx="true">{`
        .header {
        position: fixed;
        padding-top: 1.6rem;
        padding-bottom: 1.6rem;
        width: 100%;
        height: 3.88889rem;
        position: absolute;
        z-index: 120;
    }
        .container {
        max-width: 1230px;
        height: 100%;
        width: auto;
        margin-right: auto;
        margin-left: auto;
        padding: 0 1.66667rem;
    }
        .navbar-inner {
        display: flex;
        align-items: center;
        height: 100%;
        position: relative;
        width: 100%;
        max-width: 100%;
        flex: 0 0 auto;
        flex-basis: 100%;
    }
        .navbar-logo {
        display: flex;
        align-items: center;
    }
        .navbar-logo a {
        text-decoration: none;
        font-size: 1.22222rem;
        color: #000;
        height: 50px;
        overflow: hidden;
    }

        .navbar-logo a img {
        width: 11rem;
    }
        .navbar-nav {
        display: flex;
        align-items: center;
        position: absolute;
        height: 100%;
        line-height: 1;
        right: 0!important;
        font-family: "Roboto", sans-serif;
        font-weight: 500;
        font-style: normal;
    }
        .navbar-nav .menu {
        display: flex;
        flex-wrap: wrap;
        justify-content: flex-end;
        padding: 0;
        height: 100%;
        align-items: center;
    }
        .navbar-nav .menu .menu-item {
        list-style: none;
        font-size: 0.8888888888888888em;
        line-height: 1.7777777777778;
        letter-spacing: 0rem;
        line-height: 0;
        font-family: "Montserrat", sans-serif;
        font-weight: 500;
        font-style: normal;
    }
    .navbar-nav .menu .menu-item:first-child a {
        padding-left: 0;
        text-decoration: none;
        color: #1573dd;
    }
        .navbar-nav .menu .menu-item a {
        padding: 0 1.3888888888889rem;
        text-decoration: none;
        color: #1573dd;
    }
        .navbar-nav .menu .menu-item span {
        color: #1472ac;
        border-bottom-color: #ffffff;
        color: #ffffff;
    }
        .navbar-nav .menu .menu-item span:hover {
        color: #1472ac;
    }
    `}</style>
)