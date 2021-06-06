// In this file you can instantiate your views
// We here first instantiate wrapping views, then the trial views


/** Wrapping views below

* Obligatory properties

    * trials: int - the number of trials this view will appear
    * name: string

*Optional properties
    * buttonText: string - the text on the button (default: 'next')
    * text: string - the text to be displayed in this view
    * title: string - the title of this view

    * More about the properties and functions of the wrapping views - https://magpie-ea.github.io/magpie-docs/01_designing_experiments/01_template_views/#wrapping-views

*/

// Every experiment should start with an intro view. Here you can welcome your participants and tell them what the experiment is about
const intro = magpieViews.view_generator("intro", {
  trials: 1,
  name: 'intro',
  // If you use JavaScripts Template String `I am a Template String`, you can use HTML <></> and javascript ${} inside
  text: `Hello and welcome!
            <br />
            <br />
            Thank you a lot for participating in our study. 
            <br />
            This study will take you about 15 minutes.  
            
        `,
  buttonText: 'begin the experiment'
});

// For most tasks, you need instructions views
/***
const instructions = magpieViews.view_generator("instructions", {
  trials: 1,
  name: 'instructions',
  title: 'General Instructions',
  text: `This is a sample instructions view.
            <br />
            <br />
            Tell your participants what they are to do here.`,
  buttonText: 'go to trials'
});

***/
// For most tasks, you need instructions views
const instructions = magpieViews.view_generator("instructions", {
    trials: 1,
    name: 'instructions',
    title: 'General Instructions',
    text:  `
    In the following you will see pictures showing two geometrical objects. Your task is to compare both objects in the pair and decide whether they are the same or different. 
    <br />
    If you think the objects are the <strong>same</strong>, you will need press button "S", if you think they are <strong>different</strong>, you will need press button "D".
    <br />
    <br />
    We will start with a practice session.`,
    buttonText: 'start practice session'
});

const intermediate = magpieViews.view_generator("instructions", {
    trials: 1,
    name: 'intermediate',
    title: 'main experiment',
    text:  `We will now start with the main experiment.
    <br />
    Please try to answer as quickly and accurately as possible!`,
    buttonText: 'begin the experiment'
});

// In the post test questionnaire you can ask your participants addtional questions
const post_test = magpieViews.view_generator("post_test", {
  trials: 1,
  name: 'post_test',
  title: 'Additional information',
  text: 'Answering the following questions is optional, but your answers will help us analyze our results.'

  // You can change much of what appears here, e.g., to present it in a different language, as follows:
  // buttonText: 'Weiter',
  // age_question: 'Alter',
  // gender_question: 'Geschlecht',
  // gender_male: 'männlich',
  // gender_female: 'weiblich',
  // gender_other: 'divers',
  // edu_question: 'Höchster Bildungsabschluss',
  // edu_graduated_high_school: 'Abitur',
  // edu_graduated_college: 'Hochschulabschluss',
  // edu_higher_degree: 'Universitärer Abschluss',
  // languages_question: 'Muttersprache',
  // languages_more: '(in der Regel die Sprache, die Sie als Kind zu Hause gesprochen haben)',
  // comments_question: 'Weitere Kommentare'
});

// The 'thanks' view is crucial; never delete it; it submits the results!
const thanks = magpieViews.view_generator("thanks", {
  trials: 1,
  name: 'thanks',
  title: 'Thank you for taking part in this experiment!',
  prolificConfirmText: 'Press the button'
});

/** trial (magpie's Trial Type Views) below

* Obligatory properties

    - trials: int - the number of trials this view will appear
    - name: string - the name of the view type as it shall be known to _magpie (e.g. for use with a progress bar)
            and the name of the trial as you want it to appear in the submitted data
    - data: array - an array of trial objects

* Optional properties

    - pause: number (in ms) - blank screen before the fixation point or stimulus show
    - fix_duration: number (in ms) - blank screen with fixation point in the middle
    - stim_duration: number (in ms) - for how long to have the stimulus on the screen
      More about trial life cycle - https://magpie-ea.github.io/magpie-docs/01_designing_experiments/04_lifecycles_hooks/

    - hook: object - option to hook and add custom functions to the view
      More about hooks - https://magpie-ea.github.io/magpie-docs/01_designing_experiments/04_lifecycles_hooks/

* All about the properties of trial views
* https://magpie-ea.github.io/magpie-docs/01_designing_experiments/01_template_views/#trial-views
*/

const practice = magpieViews.view_generator("key_press", {
    trials: 12,
    name: 'practice trials',
    name: 'practice',
    pause: 250,
    data: _.shuffle(practice_trials.key_press),
    key1: "s",
    key2: "d",
    s: "same",
    d: "different",
  
});


const main = magpieViews.view_generator("key_press",{
    trials: 48,
    name: 'main',
    pause: 250,
    data: _.shuffle(main_trials.key_press),
    key1: "s",
    key2: "d",
    s: "same",
    d: "different",
});


/***
// Here, we initialize a key_press_task
const key_press_task = magpieViews.view_generator("key_press", {
  // This will use all trials specified in `data`, you can user a smaller value (for testing), but not a larger value
  trials: trial_info.key_press_trials.length,
  // name should be identical to the variable name
  name: 'key_press_task',
  data: _.shuffle(trial_info.key_press_trials),
  pause: 250,
  key1: "s",
  key2: "d",
  s: "same",
  d: "different",
  // you can add custom functions at different stages through a view's life cycle
  hook: {
      after_response_enabled: check_response
  }
});

// There are many more templates available:
// forced_choice, slider_rating, dropdown_choice, testbox_input, rating_scale, image_selection, sentence_choice,
// key_press, self_paced_reading and self_paced_reading_rating_scale
***/
