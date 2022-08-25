import React from "react";
import {
  Box,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { lightBlue, blueGrey } from "@mui/material/colors";
const Multiclassifier = () => {
  return (
    <Box component="main" px={{ xs: 3, md: 7 }}>
      <Typography
        component="h1"
        fontWeight="bold"
        fontSize="2rem"
        textAlign="center"
        my={2}
        py={3}
        bgcolor={lightBlue[50]}
        sx={{
          borderTopRightRadius: 32,
          borderBottomLeftRadius: 32,
        }}
      >
        Multiclassifier
      </Typography>
      <Box
        p={2}
        bgcolor="#f8f8f8"
        fontFamily="monospace"
        fontSize={{ lg: "1.5rem" }}
        border="1px solid #0000001f"
        borderLeft="3px solid #ff9c34"
      >
        class MultiTrain.
        <Typography component="strong" fontWeight="bold" fontSize="inherit">
          MultiClassifier
        </Typography>
        (cores = -1, random_state = randint(1000), verbose = False, target_class
        = ‘binary’)
      </Box>
      <Typography fontSize="1.2rem" mt={2}>
        A MultiClassifier
      </Typography>
      <Typography fontSize="1.2rem" my={2}>
        A MultiClassifier is a combination of several classifier estimators in
        which each of the estimators is fitted on the training data and a pandas
        dataframe containing evaluation metrics such as accuracy, balanced
        accuracy, r2 score, f1 score, precision, recall, roc auc score are
        reported for each of the models.
      </Typography>
      {/* Parameters */}

      <Box component="section">
        <Typography component="h2" p={3} fontWeight="bold" fontSize="1.3rem">
          Parameters
        </Typography>
        {/* The column */}
        <Accordion disableGutters square={false}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography component="span" fontSize="1.1rem">
              cores: int, default=-1
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              This parameter is used to specify how many concurrent processes or
              threads should be used for routines that are parallelized with
              joblib. <br /> If set to -1, all CPUs are used. <br />
              If less than-1, (n_cpus + 1 + n_jobs) e.g. -2 means all CPU’s but
              one are used. The value for cores is set on all classifiers with
              the n_jobs parameter. <br /> See the{" "}
              <a href="https://scikit-learn.org/stable/glossary.html#term-n_jobs">
                scikit-learn documentation for more.
              </a>
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion disableGutters>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography component="span" fontSize="1.1rem">
              random_state: int, default=randint(1000)
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Unless specified, a random number between 0 and 1000 is set on the
              random_state parameter on all estimators in the MultiClassifier.{" "}
              <br /> See the{" "}
              <a href="https://scikit-learn.org/stable/glossary.html#term-random_state">
                scikit-learn documentation for more.
              </a>
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion disableGutters>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel3a-content"
            id="panel3a-header"
          >
            <Typography component="span" fontSize="1.1rem">
              verbose: bool, default = False
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              If verbose is set to True, when the fit function is called, the
              name of the estimator currently being fitted on the training set
              is displayed in your notebook.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion disableGutters>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel4a-content"
            id="panel4a-header"
          >
            <Typography component="span" fontSize="1.1rem">
              target_class: ['binary', ‘multiclass'] , default = 'binary'
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              This indicates the type of classification problem you're trying to
              solve. If multiclass, set to 'multiclass' to avoid throwing an
              error as multiclass training is slightly different from binary.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion disableGutters>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel5a-content"
            id="panel5a-header"
          >
            <Typography component="span" fontSize="1.1rem">
              imbalanced: bool, default = False
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Set to True if you’re working with an imbalanced classification
              dataset.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion disableGutters square={false}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel6a-content"
            id="panel6a-header"
          >
            <Typography component="span" fontSize="1.1rem">
              strategy: str, default = None
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography component="div">
              Set your desired sampling strategy, whether oversampling,
              undersampling, or over and undersampling.
              <Box p={2} my={2} bgcolor="#f8f8f8" fontFamily="monospace">
                from MultiTrain import MultiClassifier
                <br /> train = MultiClassifier() <br /> train.strategies()
              </Box>
              Use the above code example to view a list of the different
              strategies you can set to this parameter. This parameter can only
              be used when imbalanced is set to True.
              <Box p={2} my={2} bgcolor="#f8f8f8" fontFamily="monospace">
                from MultiTrain import MultiClassifier
                <br /> train = MultiClassifier(cores=-1, random_state = 42,
                verbose = True, target_class='binary', imbalanced=True,
                strategy='SMOTE')
              </Box>
            </Typography>
          </AccordionDetails>
        </Accordion>
      </Box>
      {/* End of Parameters */}

      {/* Drop down */}
      <Box component="section" mt={2}>
        <Typography fontSize="1.1rem">
          The evaluation metrics available when using{" "}
          <i>sklearn.model_selection.train_test_split</i> or the{" "}
          <i>MultiClassifier split</i> function are:
        </Typography>
        <ul>
          <li>
            Binary Classification:
            <ol style={{ fontSize: "0.9em" }}>
              <li>Accuracy</li>
              <li>r2 score</li>
              <li>ROC AUC</li>
              <li>f1 score</li>
              <li>Precision</li>
              <li>Recall</li>
            </ol>
          </li>
          <li>
            Muticlass Classification:
            <ol style={{ fontSize: "0.9em" }}>
              <li>Accuracy</li>
              <li>r2 score</li>
            </ol>
          </li>
        </ul>
        <div>
          <p>The evaluation metrics available when kf is set to True are:</p>
          <ul>
            <li>
              If target_class == ‘binary’:
              <ul>
                <li>
                  show_train_score is False:
                  <ol>
                    <li>Accuracy</li>
                    <li>Balanced Accuracy</li>
                    <li>Precision</li>
                    <li>Recall</li>
                    <li>f1</li>
                    <li>r2</li>
                    <li>Standard Deviation of Accuracy</li>
                  </ol>
                </li>

                <li>
                  show_train_score is True:
                  <ol>
                    <li>Accuracy(Train)</li>
                    <li>Accuracy</li>
                    <li>Balanced Accuracy(Train)</li>
                    <li>Precision(Train)</li>
                    <li>Precision</li>
                    <li>Recall(Train)</li>
                    <li>Recall</li>
                    <li>f1(Train)</li>
                    <li>f1</li>
                    <li>r2</li>
                    <li>Standard Deviation of Accuracy(Train)</li>
                    <li>Standard Deviation of Accuracy</li>
                  </ol>
                </li>
              </ul>
            </li>
            <br />
            <li>
              If target_class == ‘multiclass’:
              <ul>
                <li>
                  show_train_score is False:
                  <ol>
                    <li>Precision Macro</li>
                    <li>Recall Macro</li>
                    <li>Balanced Accuracy</li>
                    <li>f1 Macro</li>
                  </ol>
                </li>

                <li>
                  show_train_score is True:
                  <ol>
                    <li>Precision Macro(Train)</li>
                    <li>Precision Macro</li>
                    <li>Recall Macro(Train)</li>
                    <li>Recall Macro</li>
                    <li>f1 Macro(Train)</li>
                    <li>f1 Macro</li>
                    <li>Time Taken(s)</li>
                  </ol>
                </li>
              </ul>
            </li>
          </ul>

          {/* t_split */}
          <ul>
            <p>
              The evaluation metrics available when t_split is set to True are:
            </p>
            <li>
              If target_class == ‘binary’:
              <ul>
                <li>
                  show_train_score is True:
                  <ol>
                    <li>Accuracy(Train)</li>
                    <li>Accuracy</li>
                    <li>Balanced Accuracy(Train)</li>
                    <li>Balanced Accuracy</li>
                    <li>r2 score(Train)</li>
                    <li>r2 score</li>
                    <li>ROC AUC(Train)</li>
                    <li>ROC AUC</li>
                    <li>f1 score(Train)</li>
                    <li>f1 score</li>
                    <li>Precision(Train)</li>
                    <li>Precision</li>
                    <li>Recall(Train)</li>
                    <li>Recall</li>
                    <li>execution time(seconds)</li>
                  </ol>
                </li>

                <li>
                  show_train_score is False:
                  <ol>
                    <li>Accuracy</li>
                    <li>Balanced Accuracy</li>
                    <li>r2 score</li> <li>ROC AUC</li>
                    <li>f1 score</li>
                    <li>Precision</li>
                    <li>Recall</li>
                    <li>execution time(seconds)</li>
                  </ol>
                </li>
              </ul>
            </li>
            <br />
            <li>
              If target_class == ‘multiclass’:
              <ul>
                <li>
                  show_train_score is True:
                  <ol>
                    <li>Overfitting</li>
                    <li>Accuracy(Train)</li>
                    <li>Accuracy</li>
                    <li>Balanced Accuracy(Train)</li>
                    <li>Balanced Accuracy</li>
                    <li>r2 score(Train)</li>
                    <li>r2 score</li>
                    <li>f1 score(Train)</li>
                    <li>f1 score</li>
                    <li>Precision (Train)</li>
                    <li>Precision </li>
                    <li>Recall (Train)</li>
                    <li>Recall </li>
                    <li>execution time(seconds)</li>
                  </ol>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </Box>
      {/* End of Drop down */}
      {/* Methods */}
      <section>
        <Typography
          component="h2"
          p={3}
          fontWeight="bold"
          fontSize="1.2rem"
          // bgcolor={lightBlue[500]}
          // bgcolor={blueGrey[50]}
        >
          Methods
        </Typography>
        <div>
          <h3>split()</h3>

          <Box p={2} my={2} bgcolor="#f8f8f8" fontFamily="monospace">
            from sklearn import datasets <br /> from MultiTrain import
            MultiClassifier <br /> df = datasets.load_boston() <br /> features,
            labels = boston.data, boston.target <br /> train = MultiClassifier()
            <br /> split = train.split(X = features, y = labels, sizeOfTest=0.2,
            randomState=45, strat=False, dimensionalit_reduction = False,
            normalize = any, n_component, columns_scale, shuffle_data=True)
          </Box>

          <p>
            This metric splits the data into X_train, y_train, X_test, and
            y_test.{" "}
          </p>
          <h4>PARAMETERS</h4>
          <ul>
            <li>
              <b>x: any</b> <br />
              Features
            </li>
            <li>
              <b>y: any</b> <br />
              Labels
            </li>
            <li>
              <b>randomState: int</b> <br />
              It shuffles the data as specified before the split.
            </li>
            <li>
              <b>sizeOfTest : float, default = 0.2</b> <br />
              The percentage of data that goes to the test set
            </li>
            <li>
              <b>shuffle_data : bool, default = True</b> <br />
              If shuffle_data is set to True, it randomly splits the data.
            </li>
            <li>
              <b>strat: bool, default = False</b> <br />
              If set to True data is split in a stratified fashion. shuffle_data
              can only be False if strat is False
            </li>
            <li>
              <b>dimensionality_reduction: bool, default = False</b> <br />
              If set to True it reduces the number of input variables.
            </li>
            <li>
              <b>n_components: int</b> <br />
              Reduces large data set into a smaller one that contains most of
              the features of the larger data set. If dimensionalit_reduction is
              set to True n_component should be stated.
            </li>
            <li>
              <b>normalize: any</b> <br />
              Transforms input into the range [0,1] or any other range. Learn
              more about the options available by clicking <a href="/">here.</a>
            </li>
            <li>
              <b>columns_to_scale: List or Tuple </b> <br />
              Columns to be scaled.
            </li>
          </ul>
        </div>
        <div>
          <h3>fit()</h3>
          <Box p={2} my={2} bgcolor="#f8f8f8" fontFamily="monospace">
            Fit = fit(X, y, self_split , X_train, X_test, y_train, ,y_test,
            split_self = False, split_data, splitting = False, kf = False, fold
            = int, excel = False, return_best_model, return_fastest_model =
            False, show_train_score = False, text = False, vectorize, ngrams =
            tuple, sort)
          </Box>
          <h4>PARAMETERS</h4>
          <ul>
            <li>
              <b>X: any</b> <br />
              Features
            </li>
            <li>
              <b>y: any</b> <br />
              Labels
            </li>
            <li>
              <b>X_train:</b> <br />
              Train features
            </li>
            <li>
              <b>X_test:</b> <br />
              Test features
            </li>
            <li>
              <b>y_train:</b> <br />
              Train labels
            </li>
            <li>
              <b>y_test:</b> <br />
              Test labels
            </li>
            <li>
              <b>split_self: string = None</b> <br />
              When data is split before fitting, it is set to True if not set to
              False.
            </li>
            <li>
              <b>Split_data: bool default = False</b> <br />
              If the data is not split before fitting, then set to True. If not,
              set to False.
            </li>
            <li>
              <b>Splitting bool default = False:</b> <br />
              If set to True, then assign the values of the split data to the
              variables X_train, y_train, X_test, y_test. If False, do nothing.
            </li>
            <li>
              <b>Kf : bool default = False</b> <br />
              Set to True to use the KFold cross-validation method as a
              splitting method.
            </li>
            <li>
              <b>Fold : int default = 5:</b> <br />
              If Kf is set to True it uses the default 5 if not specify the
              number of fold, where n_split is 10 random state is set to 1
            </li>
            <li>
              <b>excel: bool default = False</b> <br />
              Set to True to save the dataframe in an excel format in your
              current working directory.
            </li>
            <li>
              <b>return_best_model: bool default = False</b> <br />
              Set to True to return a dataframe of the best model.
            </li>
            <li>
              <b>return_fastest_model: bool default = False</b> <br />
              Set True to return a dataframe of the fastest model.
            </li>
            <li>
              <b>Show_train_score: bool default = False</b> <br />
              Set True to show the score of the models after training.
            </li>
            <li>
              <b>text: bool default = False</b> <br />
            </li>
            <li>
              <b>Vectorizer: str = none</b> <br />
              It can only be used when text is set to True.
            </li>
            <li>
              <b>n_grams : tuple = None</b> <br />
              It can be used when text is set to True.
            </li>
          </ul>
        </div>

        <div>
          <h3>use_model()</h3>
          <h4>PARAMETERS</h4>
          <ul>
            <li>
              <b>df: Pandas DataFrame object</b> <br />
              It represents the data on which the model will be run.
            </li>
            <li>
              <b>model: string, default = None</b> <br />
              It represents the full name of the classifier algorithm to be used
              in this method.
            </li>
            <li>
              <b>best: string, default = None</b> <br />
              It represents the name of the evaluation metric that will be used
              to find the best model.
            </li>{" "}
            <br />
            <li>
              This method will check whether the name passed in the "model"
              variable is a valid model name as defined in
              classifier_model_names(). Upon this, it will then give the
              performance of the desired model based on the preferred evaluation
              metric. You can also only use one of the two parameters, but not
              both
            </li>
          </ul>

          {/* IMAGE */}
          <div>
            <h3>tune_parameters()</h3>
            <h4>Parameters:</h4>
            <ul>
              <li>
                <b>model: string</b> <br />
                It represents an instance of the model to be tuned. See more in
                use_model().
              </li>

              <li>
                <b>parameters: dictionary</b> <br />
                It contains the parameters of the model to be tuned. Will be
                inputted in the format:{" "}
                {
                  "{param_1: [value1, value2...value_n] ...param_n:[value1, value2... value_n]}"
                }
              </li>
              <li>
                <b>
                  tune: string, [‘grid’, ‘random’, ‘bayes’, ‘half-grid’,
                  ‘half-random’]
                </b>{" "}
                <br />
                It represents the type of search method to be used (for
                hyperparameter optimization). Possible values include:
                <ul>
                  <ol>1. grid - for GridSearchCV</ol>
                  <ol>2. random - for RandomSearchCV</ol>
                  <ol>3. Bayes - for BayesSearchCV</ol>
                  <ol>4. half-grid - for HalvingGridSearchCV</ol>
                  <ol>5. half-random - for HalvingRandomSearchCV</ol>
                </ul>
              </li>
              <li>
                <b>use_cpu: int, default = None</b> <br />
                It represents the number of jobs to be processed in parallel, or
                more simply, the number of CPU cores to be used for the tuning
                process. If set to -1, all available CPU cores will be used.
              </li>
              <li>
                <b>cv: int, default=5</b> <br />
                It denotes the number of cross-validation splits.
              </li>
              <li>
                <b>factor: int, default=3</b> <br />
                To be used with the HalvingGridSearchCV. This is the halving
                factor which sets the proportion of candidates to be selected
                for each subsequent iteration, e.g a factor of 3 means that
                one-third of the candidates are selected. If a model is tuned,
                the default scorers to be used for any tuning method are
                precision, recall and accuracy.
              </li>
              <li>
                <b>n_iter: int, default = 50</b> <br />
                It specifies the number of iterations.
              </li>
              <li>
                <b>resource: default value = "n_samples"</b> <br />
                It defines the resources that increase with each iteration.
              </li>
              <li>
                <b>random_state: int, default = None</b> <br />
                It is used to define a random seed to enable reproducibility of
                results.
              </li>
              <li>
                <b>return_train_score: bool, default=False</b> <br />
                To determine whether to return training scores or not.
              </li>
              <li>
                <b>pre_dispatch: int or str, default = “2*n_jobs”</b> <br />
                It is used to limit the number of jobs dispatched during
                parallel execution. A lower number can avoid memory consumption
                explosions when there are more jobs dispatched than what the CPU
                can usually process.
              </li>
              <li>
                <b>aggressive_elimination: bool, default=False</b> <br />
                It represents whether or not the first iteration should be
                performed multiple times (if the amount of resources set is not
                high enough) until the number of candidates is small enough.
              </li>
              <li>
                <b>
                  verbose: int, default=5 for classification and 4 for
                  regression.
                </b>{" "}
                <br />
                It is used to set the verbosity level.
              </li>
              <li>
                <b>error_score: default = np.nan</b> <br />
                It assigns a value to the score if an error occurs while fitting
                the estimator.
              </li>
              <li>
                <b>min_resources_grid: default = “exhaust”</b> <br />
                It is used to set the minimum number of resources to be utilized
                by GridSearchCV.
              </li>
              <li>
                <b>min_resources_rand: default = “smallest”</b> <br />
                It is used to set the minimum number of resources to be utilized
                by RandomSearchCV.
              </li>
              <li>
                <b>refit: bool, default=True</b> <br />
                It is used to determine whether or not to refit the data after
                each iteration.
              </li>
            </ul>
          </div>
          <div>
            <h3>visualize</h3>
            <p>
              The method accepts the dataframe of the estimators and their
              evaluation metrics and plots them in a bar chart using seaborn.
              There are also options to save the plots into a specified
              directory in pdf or png format.
            </p>
            {/* IMAGE */}
            <h4>Parameters: </h4>
            <ul>
              <li>
                <b>param: DataFrame object</b> <br />
                accepts a dataframe of the fitted estimators and their
                evaluation metrics. Pass the fit method into a variable which
                you can then pass to <b>param.</b>
              </li>
              <li>
                <b>kf: bool, default = False</b> <br />
                set to True if{" "}
                <b>
                  <em>kf was set to True</em>
                </b>{" "}
                in the fit method.
              </li>
              <li>
                <b>file_path: any</b> <br />
                This accepts a file path where the plots should be saved.
              </li>
              <li>
                <b>t_split: bool, default = False</b> <br />
                Set to True if you used the split method.
              </li>
              <li>
                <b>size: tuple, default = (15, 8)</b> <br />
                This specifies the dimensions of the plots
              </li>
              <li>
                <b>save: str, [‘pdf’, ‘png’], default = None</b> <br />
                This is the format you want to save the plot in.
              </li>
              <li>
                <b>save_name: str, default = ‘dir1’</b> <br />
                This specifies the name of the folder you want to save the plots
                to.
              </li>
            </ul>
          </div>
          <div>
            <h3>show()</h3>
            {/* IMAGE */}
            <p>
              The method accepts the dataframe of the estimators and their
              evaluation metrics and plots them in a bar chart using plotly for
              interactive plots. There are also options to save the plots into a
              specified directory in pdf or png format.
            </p>
            <h4>Parameters: </h4>
            <ul>
              <li>
                <b>param: DataFrame object</b> <br />
                It accepts a dataframe of the fitted estimators and their
                evaluation metrics. Pass the fit method into a variable which
                you can then pass to <b>param.</b>
              </li>
              <li>
                <b>file_path: any</b> <br />
                This accepts a file path where the plots should be saved.
              </li>
              <li>
                <b>kf: bool, default = False</b> <br />
                set to True if{" "}
                <b>
                  <em>kf was set to True</em>
                </b>{" "}
                in the fit method.
              </li>
              <li>
                <b>t_split: bool, default = False</b> <br />
                set to True if you used the split method.
              </li>
              <li>
                <b>size: tuple, default = (15, 8)</b> <br />
                This specifies the dimensions of the plots
              </li>
              <li>
                <b>save: bool, default = False</b> <br />
                Set to True if you want to save your plots
              </li>
              <li>
                <b>save_name: str, default = ‘dir1’</b> <br />
                This specifies the name of the folder you want to save the plots
                to.
              </li>
            </ul>
          </div>
        </div>
      </section>
      {/* End of Methods */}
    </Box>
  );
};

export default Multiclassifier;
