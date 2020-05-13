import withRoot from './modules/withRoot';
// --- Post bootstrap -----
import React from 'react';


function Index() {
  return (
    <React.Fragment>
      <button>
	  <a data-sheerid-iframe="true" href="https://services.sheerid.com/verify/5ebb762051ec491d95ee887f/">Confirm Eligibility</a>
      </button>
      <script src="https://services.sheerid.com/jsapi/SheerID.js"></script>
      <script src="https://cdn.jsdelivr.net/npm/@sheerid/jslib@1/sheerid.js"></script>
      <script>
        sheerId.conversion.listenForVerificationId();
      </script>
    </React.Fragment>
  );
}

export default withRoot(Index);
