// A view template is a function that returns a view,
// this functions gets some config (e.g. trial_data, name, etc.) information as input
// A view is an object, that has a name, CT (the counter of how many times this view occurred in the experiment),
// trials the maximum number of times this view is repeated
// and a render function, the render function gets CT and the magpie-object as input
// and has to call magpie.findNextView() eventually to proceed to the next view (or the next trial in this view),
// if it is an trial view it also makes sense to call magpie.trial_data.push(trial_data) to save the trial information

// The enable response dict contains a generator function for every view type we support
// The generator gets the config dict, CT, the answer_container_generator and the startingTime as input
// First we create a custom_views object
// The enable response dict contains a generator function for every view type we support
// The generator gets the config dict, CT, the answer_container_generator and the startingTime as input
// First we create a custom_views object

