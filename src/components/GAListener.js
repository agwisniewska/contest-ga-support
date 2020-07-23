import {useEffect} from "react";
import ReactGA from "react-ga";
import {withRouter} from "react-router";
import PropTypes from "prop-types";

function sendPageView(location) {
    ReactGA.set({page: location.pathname + location.search});
    ReactGA.pageview(location.pathname + location.search);
}

function GAListener({children, trackingId, history}) {
    console.log('HISTORY LOCATION', history.location);

    useEffect(() => {
        ReactGA.initialize(trackingId);
        sendPageView(history.location);
        return history.listen(sendPageView);
    }, [history, trackingId]);

    return children;
}

GAListener.propTypes = {
    children: PropTypes.node,
    trackingId: PropTypes.string,
    history: PropTypes.shape({
        listen: PropTypes.func,
    }),
};

export default withRouter(GAListener);