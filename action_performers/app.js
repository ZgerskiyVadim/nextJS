import {dispatcher} from "../store";

export function performSetupLoaderVisibility(id, waiting) {
    dispatcher.dispatchAction('SETUP_LOADER_VISIBILITY', { id, waiting });
}