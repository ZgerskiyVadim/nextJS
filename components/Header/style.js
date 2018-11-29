export default () => (
    <style jsx="true">{`
      .header {
        position: fixed;
        padding-bottom: 2.7777777777777777rem;
        background-color: rgba(5, 26, 45, 0.75);
        width: 100%;
        background: #f5f5f5;
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
        width: 9.833333333333334rem;
      }
    `}</style>
)