/*Way to add CSS styles to components is using inline styles.
The syntax of inline styles in JSX is a bit custom.
Consider a starting Promo component, containing code that you encountered earlier:*/

function Promo(props) {
    return (
        <div className="promo-section">
            <div>
                <h1>{props.heading}</h1>
            </div>
            <div>
                <h2>{props.promoSubHeading}</h2>
            </div>
        </div>
    );
}

export default Promo;
