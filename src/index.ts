import {
  JupyterFrontEnd,
  JupyterFrontEndPlugin
} from '@jupyterlab/application';

/**
 * Initialization data for the autocomplete-editor extension.
 */
const plugin: JupyterFrontEndPlugin<void> = {
  id: 'autocomplete-editor:plugin',
  autoStart: true,
  activate: (app: JupyterFrontEnd) => {
    console.log('JupyterLab extension autocomplete-editor is activated!');
  }
};

export default plugin;
