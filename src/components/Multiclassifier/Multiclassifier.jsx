import React from "react";

const Multiclassifier = () => {
  return (
    <main>
      <h1> Multiclassifier</h1>
      <div>
        class MultiTrain.MultiClassifier(cores = -1, random_state =
        randint(1000), verbose = False, target_class = ‘binary’)
      </div>
      <p>A MultiClassifier</p>
      <p>
        A MultiClassifier is a combination of several classifier estimators in
        which each of the estimators is fitted on the training data and a pandas
        dataframe containing evaluation metrics such as accuracy, balanced
        accuracy, r2 score, f1 score, precision, recall, roc auc score are
        reported for each of the models.
      </p>
      {/* Parameters */}
      <section>
        <div>
          <h2>Parameters</h2>
          {/* The column */}
          <div>
            {/* First point */}
            <p>
              <span>cores: int, default=-1</span>
              This parameter is used to specify how many concurrent processes or
              threads should be used for routines that are parallelized with
              joblib. If set to -1, all CPUs are used. If less than-1, (n_cpus +
              1 + n_jobs) e.g. -2 means all CPU’s but one are used. The value
              for cores is set on all classifiers with the n_jobs parameter. See
              the{" "}
              <a href="https://scikit-learn.org/stable/glossary.html#term-n_jobs">
                scikit-learn documentation for more.
              </a>
            </p>
            {/* Second point */}
            <p>
              <span>random_state: int, default=randint(1000)</span>
              Unless specified, a random number between 0 and 1000 is set on the
              random_state parameter on all estimators in the MultiClassifier.
              See the{" "}
              <a href="https://scikit-learn.org/stable/glossary.html#term-random_state">
                scikit-learn documentation for more.
              </a>
            </p>
            {/* Third point */}
            <p>
              <span>
                verbose: bool, default = False {/* This should be bold */}
              </span>
              If verbose is set to True, when the fit function is called, the
              name of the estimator currently being fitted on the training set
              is displayed in your notebook.
            </p>
            {/* Fourth point */}
            <p>
              <span>
                target_class: ['binary', ‘multiclass'] , default = 'binary'
              </span>
              This indicates the type of classification problem you're trying to
              solve. If multiclass, set to 'multiclass' to avoid throwing an
              error as multiclass training is slightly different from binary.
            </p>
            <p>
              <span>imbalanced: bool, default = False</span>
              Set to True if you’re working with an imbalanced classification
              dataset.
            </p>
            <p>
              <span>strategy: str, default = None</span>
              Set your desired sampling strategy, whether oversampling,
              undersampling, or over and undersampling.
              <img src="" alt="" />
              Use the above code example to view a list of the different
              strategies you can set to this parameter. This parameter can only
              be used when imbalanced is set to True.
              <img src="" alt="" />
            </p>
            <div></div>
          </div>
        </div>
      </section>
      {/* End of Parameters */}

      {/* Drop down */}
      <section>
        <p>
          The evaluation metrics available when using
          <i>sklearn.model_selection.train_test_split</i>
          or the
          <i>MultiClassifier split</i>
          function are:{" "}
        </p>
        <ul>
          <li>
            Binary Classification = ["Accuracy", "r2 score", "ROC AUC", "f1
            score", "Precision", "Recall"]
          </li>
          <li>Muticlass Classification = ["Accuracy", "r2 score"]</li>
        </ul>
        <div>
          <p>The evaluation metrics available when kf is set to True are:</p>
          <p>
            <span>
              If target_class == ‘binary’ and show_train_score is False:
              ["Accuracy",
            </span>
            ”Balanced Accuracy”, "Precision", "Recall", "f1", "r2", "Standard
            Deviation of Accuracy"]
          </p>
          <p>
            <span>
              If target_class == ‘binary’ and show_train_score is True:
            </span>
            ["Accuracy(Train)", "Accuracy", ”Balanced Accuracy(Train)”,
            “Balanced Accuracy”, "Precision(Train)", "Precision",
            "Recall(Train)", "Recall", "f1(Train)", "f1", ”r2”, "Standard
            Deviation of Accuracy(Train)", "Standard Deviation of Accuracy"]
          </p>
          <p>
            <span>
              If target_class == "multiclass" and show_train_score is False:
            </span>
            ["Precision Macro", "Recall Macro", "f1 Macro"]
          </p>
          <p>
            <span>
              If target_class == “multiclass” and show_train_score is True:
            </span>
            ["Precision Macro(Train)", "Precision Macro", "Recall Macro(Train)",
            "Recall Macro", "f1 Macro(Train)", "f1 Macro", "Time Taken(s)"]
          </p>
          <p>
            The evaluation metrics available when t_split is set to True are:
          </p>
          <p>
            <span>
              If target_class == ‘binary’ and show_train_score is True:
            </span>
            ["Accuracy(Train)", "Accuracy", "Balanced Accuracy(Train)","Balanced
            Accuracy", "r2 score(Train)", "r2 score", "ROC AUC(Train)", "ROC
            AUC", "f1 score(Train)", "f1 score","Precision(Train)", "Precision",
            "Recall(Train)", "Recall", "execution time(seconds)"]
          </p>
          <p>
            <span>
              If target_class == “binary” and show_train_score is False:
            </span>
            ["Accuracy", "Balanced Accuracy", "r2 score", "ROC AUC", "f1 score",
            "Precision", "Recall", "execution time(seconds)"]
          </p>
          <p>
            <span>
              If target_class == “multiclass” and show_train score is True:
            </span>
            ["Overfitting", "Accuracy(Train)", "Accuracy", "Balanced
            Accuracy(Train)", "Balanced Accuracy", "r2 score(Train)", "r2
            score", "f1 score(Train)", "f1 score", "Precision(Train)",
            "Precision", "Recall(Train)", "Recall", "execution time(seconds)"]
          </p>
        </div>
      </section>
      {/* End of Drop down */}
      {/* Methods */}
      <section>
        <h2>Methods</h2>
      </section>
      {/* End of Methods */}
    </main>
  );
};

export default Multiclassifier;
