/**
 * 100 AIML Concept Questions for AIML Engineer Role
 */

export interface Question {
  id: number;
  section: string;
  question: string;
  options: string[];
  answer: number;
  explanation: string;
}

export const aimlQuestions: Question[] = [
  // --- Mathematics & Statistics (1-20) ---
  {
    id: 1,
    section: "Mathematics & Stats",
    question: "Which of the following is the correct formula for the Central Limit Theorem (CLT) regarding the sample mean?",
    options: [
      "The sample mean follow a Poisson distribution as n increases.",
      "The sample mean distribution approaches a Normal distribution as n increases, regardless of the population distribution.",
      "The population variance equals the sample variance.",
      "Large samples always have zero bias."
    ],
    answer: 1,
    explanation: "CLT states that the sampling distribution of the mean will be normal if the sample size is large enough."
  },
  {
    id: 2,
    section: "Mathematics & Stats",
    question: "In the context of PCA, which of the following best describes 'Eigenvectors'?",
    options: [
      "They represent the amount of variance in a direction.",
      "They are the directions along which the data varies the most.",
      "They are always zero for scaled data.",
      "They represent the labels of the data."
    ],
    answer: 1,
    explanation: "Eigenvectors determine the direction of the new feature space (principal components)."
  },
  {
    id: 3,
    section: "Mathematics & Stats",
    question: "What is the relationship between Variance and Bias in the 'Bias-Variance Tradeoff'?",
    options: [
      "Both should be maximized for better accuracy.",
      "High Bias leads to Overfitting.",
      "High Variance leads to Overfitting.",
      "They are independent of each other."
    ],
    answer: 2,
    explanation: "High variance means the model is too sensitive to small fluctuations in the training set, leading to overfitting."
  },
  {
    id: 4,
    section: "Mathematics & Stats",
    question: "Which probability distribution is characterized by the 'memoryless' property?",
    options: ["Normal Distribution", "Binomial Distribution", "Exponential Distribution", "Bernoulli Distribution"],
    answer: 2,
    explanation: "The exponential distribution is the only continuous probability distribution that is memoryless."
  },
  {
    id: 5,
    section: "Mathematics & Stats",
    question: "What does a P-value of 0.03 suggest if the significance level (alpha) is 0.05?",
    options: [
      "Fail to reject the Null Hypothesis.",
      "Reject the Null Hypothesis.",
      "The Null Hypothesis is definitely true.",
      "The data is insufficient."
    ],
    answer: 1,
    explanation: "If P-value < alpha, we reject the null hypothesis as the result is statistically significant."
  },
  {
    id: 6,
    section: "Mathematics & Stats",
    question: "What is the L1 norm also known as in regularization?",
    options: ["Ridge", "Lasso", "Elastic Net", "Softmax"],
    answer: 1,
    explanation: "L1 regularization is Lasso, which uses the absolute values of coefficients."
  },
  {
    id: 7,
    section: "Mathematics & Stats",
    question: "What is the primary use of the Jacobian matrix in ML?",
    options: [
      "Calculating second-order derivatives.",
      "Representing all first-order partial derivatives of a vector-valued function.",
      "Normalizing the feature vector.",
      "Reducing dimensionality."
    ],
    answer: 1,
    explanation: "The Jacobian is used in backpropagation for vector-valued functions."
  },
  {
    id: 8,
    section: "Mathematics & Stats",
    question: "What is 'Correlation' compared to 'Covariance'?",
    options: [
      "Correlation is the same as Covariance.",
      "Correlation is scaled Covariance (between -1 and 1).",
      "Covariance is always positive, correlation can be negative.",
      "Correlation measures non-linear relationships only."
    ],
    answer: 1,
    explanation: "Correlation is normalized covariance, making it easier to interpret regardless of the scale of variables."
  },
  {
    id: 9,
    section: "Mathematics & Stats",
    question: "Which optimization algorithm uses 'Momentum' to accelerate gradients?",
    options: ["Vanilla SGD", "RMSProp", "Adam", "Newton's Method"],
    answer: 2,
    explanation: "Adam and GDM use momentum to dampen oscillations and move faster toward the minimum."
  },
  {
    id: 10,
    section: "Mathematics & Stats",
    question: "What is the definition of 'Entropy' in Information Theory?",
    options: [
      "Energy of the system.",
      "Amount of information gain.",
      "Measure of uncertainty or randomness in a dataset.",
      "The mean of the data."
    ],
    answer: 2,
    explanation: "Entropy measures the average rate at which information is produced by a stochastic source of data."
  },
  {
    id: 11,
    section: "Mathematics & Stats",
    question: "If two events are independent, what is P(A or B)?",
    options: [
      "P(A) + P(B)",
      "P(A) * P(B)",
      "P(A) + P(B) - P(A)P(B)",
      "P(A) / P(B)"
    ],
    answer: 2,
    explanation: "For independent events P(A and B) = P(A)P(B), so P(A or B) = P(A) + P(B) - P(A)P(B)."
  },
  {
    id: 12,
    section: "Mathematics & Stats",
    question: "What is a 'Kernel' in SVM?",
    options: [
      "The center of the data.",
      "A function that computes the dot product of two vectors in a higher-dimensional space.",
      "A type of neural network layer.",
      "A data cleaning technique."
    ],
    answer: 1,
    explanation: "Kernels allow SVMs to solve non-linear problems by implicitly mapping inputs to high-dimensional spaces."
  },
  {
    id: 13,
    section: "Mathematics & Stats",
    question: "What is the 'Condition Number' of a matrix used for?",
    options: [
      "Measuring how sensitive a function is to changes in input.",
      "Finding the determinant.",
      "Calculating the trace.",
      "Standardizing the data."
    ],
    answer: 0,
    explanation: "A high condition number suggests the matrix is near-singular and leads to numerical instability."
  },
  {
    id: 14,
    section: "Mathematics & Stats",
    question: "What does the 'Support' in SVM refer to?",
    options: [
      "The entire training set.",
      "Data points closest to the hyperplane.",
      "The bias term.",
      "The learning rate."
    ],
    answer: 1,
    explanation: "Support vectors are the data points that lie closest to the decision boundary."
  },
  {
    id: 15,
    section: "Mathematics & Stats",
    question: "In Bayesian Inference, what is 'Posterior' proportional to?",
    options: [
      "Likelihood * Prior",
      "Likelihood / Prior",
      "Prior / Evidence",
      "Likelihood + Prior"
    ],
    answer: 0,
    explanation: "P(theta|data) ∝ P(data|theta) * P(theta) [Likelihood * Prior]."
  },
  {
    id: 16,
    section: "Mathematics & Stats",
    question: "What is 'Curse of Dimensionality'?",
    options: [
      "More features always leads to better accuracy.",
      "As dimensions increase, data becomes sparse and distance metrics lose meaning.",
      "Data points cluster more tightly in higher dimensions.",
      "Computational power decreases linearly."
    ],
    answer: 1,
    explanation: "In high dimensions, 'near' and 'far' points become indistinguishable in terms of Euclidean distance."
  },
  {
    id: 17,
    section: "Mathematics & Stats",
    question: "Which matrix decomposition is a generalization of Eigendecomposition to non-square matrices?",
    options: ["LU Decomposition", "QR Decomposition", "Singular Value Decomposition (SVD)", "Cholesky Decomposition"],
    answer: 2,
    explanation: "SVD works for any m x n matrix, unlike Eigendecomposition which requires square matrices."
  },
  {
    id: 18,
    section: "Mathematics & Stats",
    question: "What is 'Precision' in a classification task?",
    options: [
      "TP / (TP + FN)",
      "TP / (TP + FP)",
      "TN / (TN + FP)",
      "(TP + TN) / Total"
    ],
    answer: 1,
    explanation: "Precision measures of the total positive predictions, how many were actually positive."
  },
  {
    id: 19,
    section: "Mathematics & Stats",
    question: "What is F1-Score a harmonic mean of?",
    options: [
      "Bias and Variance",
      "Precision and Sensitivity",
      "Precision and Recall",
      "Accuracy and Loss"
    ],
    answer: 2,
    explanation: "F1-Score = 2 * (Precision * Recall) / (Precision + Recall)."
  },
  {
    id: 20,
    section: "Mathematics & Stats",
    question: "What is 'Gradient' at the global minimum of a convex function?",
    options: ["One", "Positive Infinity", "Zero", "Negative"],
    answer: 2,
    explanation: "At any local or global minimum, the derivative (gradient) is zero."
  },

  // --- Classical Machine Learning (21-50) ---
  {
    id: 21,
    section: "Classical ML",
    question: "Which of these is an ensemble method that builds trees sequentially to correct previous errors?",
    options: ["Random Forest", "Gradient Boosting", "Bagging", "K-Means"],
    answer: 1,
    explanation: "Boosting (like XGBoost, LightGBM) is a sequential ensemble method."
  },
  {
    id: 22,
    section: "Classical ML",
    question: "What is the primary goal of K-Means clustering?",
    options: [
      "Minimize the distance between centroids of different clusters.",
      "Minimize the within-cluster sum of squares.",
      "Maximize the number of clusters.",
      "Predict labels for unknown data."
    ],
    answer: 1,
    explanation: "K-Means aims to partition n observations into k clusters in which each observation belongs to the cluster with the nearest mean."
  },
  {
    id: 23,
    section: "Classical ML",
    question: "Which algorithm is most sensitive to outliers?",
    options: ["Linear Regression", "Decision Trees", "Random Forest", "Naive Bayes"],
    answer: 0,
    explanation: "Linear Regression tries to fit a line to all points, and a single extreme outlier can significantly shift the slope."
  },
  {
    id: 24,
    section: "Classical ML",
    question: "What is 'Pruning' in context of Decision Trees?",
    options: [
      "Adding more branches to improve accuracy.",
      "Removing branches that provide little power to reduce overfitting.",
      "Splitting the data into training and test sets.",
      "Normalizing the features."
    ],
    answer: 1,
    explanation: "Pruning simplifies the tree to prevent it from becoming too specific to the training data."
  },
  {
    id: 25,
    section: "Classical ML",
    question: "What is the 'Kernel Trick' primarily used to avoid?",
    options: [
      "Calculating gradients.",
      "Explicitly transforming data into high-dimensional space.",
      "Scaling the inputs.",
      "Regularization."
    ],
    answer: 1,
    explanation: "The kernel trick allows us to work in high dimensions without the computational cost of direct transformation."
  },
  {
    id: 26,
    section: "Classical ML",
    question: "Which algorithm is based on the 'Strong Independence' assumption between features?",
    options: ["Logistic Regression", "Naive Bayes", "Kernel SVM", "Deep Neural Networks"],
    answer: 1,
    explanation: "Naive Bayes assumes all features are independent, which is why it is called 'Naive'."
  },
  {
    id: 27,
    section: "Classical ML",
    question: "In Random Forest, what does 'Bagging' stand for?",
    options: [
      "Binary Aggregation",
      "Bootstrap Aggregating",
      "Balanced Aggregation",
      "Boosting and Gaining"
    ],
    answer: 1,
    explanation: "Bagging involves taking multiple bootstrap samples and aggregating the results."
  },
  {
    id: 28,
    section: "Classical ML",
    question: "What metric is commonly used to evaluate the purity of a split in a classification tree?",
    options: ["Gini Impurity", "Mean Squared Error", "Euclidean Distance", "R-Squared"],
    answer: 0,
    explanation: "Gini Impurity or Information Gain (Entropy) are the standard metrics for classification tree splits."
  },
  {
    id: 29,
    section: "Classical ML",
    question: "Which of these is a non-parametric algorithm?",
    options: ["Logistic Regression", "k-Nearest Neighbors (k-NN)", "Linear Discriminant Analysis", "Gaussian Naive Bayes"],
    answer: 1,
    explanation: "k-NN doesn't make assumptions about the functional form of the data, hence it is non-parametric."
  },
  {
    id: 30,
    section: "Classical ML",
    question: "What is 'Overfitting'?",
    options: [
      "Poor performance on training data, good on test.",
      "Good performance on training data, poor on test.",
      "Poor performance on both sets.",
      "When the model is too simple."
    ],
    answer: 1,
    explanation: "Overfitting means the model has learned noise or specific patterns in training data that don't generalize."
  },
  {
    id: 31,
    section: "Classical ML",
    question: "Which of the following is a dimensionality reduction technique?",
    options: ["t-SNE", "XGBoost", "Logistic Regression", "AdaBoost"],
    answer: 0,
    explanation: "t-SNE (t-distributed Stochastic Neighbor Embedding) is used for visualizing high-dimensional data by reducing it to 2 or 3 dimensions."
  },
  {
    id: 32,
    section: "Classical ML",
    question: "What is an 'Out-of-Bag' (OOB) error?",
    options: [
      "Error on the test set.",
      "Estimation of the error for a bagged model using data not included in the bootstrap sample.",
      "Error during hyperparameter tuning.",
      "A syntax error in Python."
    ],
    answer: 1,
    explanation: "OOB error is a method of measuring the prediction error of random forests and other machine learning models utilizing bootstrap aggregating."
  },
  {
    id: 33,
    section: "Classical ML",
    question: "In Logistic Regression, what is the output of the sigmoid function interpreted as?",
    options: ["The class label directly", "The Log-Odds", "The probability of being in the positive class", "The regression slope"],
    answer: 2,
    explanation: "The sigmoid maps any value to [0, 1], which we treat as a probability."
  },
  {
    id: 34,
    section: "Classical ML",
    question: "What is 'Standardization'?",
    options: [
      "Rescaling values to [0, 1].",
      "Rescaling to have zero mean and unit variance.",
      "Removing negative values.",
      "Turning text into vectors."
    ],
    answer: 1,
    explanation: "Standardization (Z-score normalization) transforms data such that it has a mean of 0 and a standard deviation of 1."
  },
  {
    id: 35,
    section: "Classical ML",
    question: "What is 'Cold Start' problem in Recommendation Systems?",
    options: [
      "The server takes time to start.",
      "New users or items have no history, making it hard to recommend or be recommended.",
      "The algorithm is too complex.",
      "Not enough RAM is available."
    ],
    answer: 1,
    explanation: "Collaborative filtering fails for new entries without interaction history."
  },
  {
    id: 36,
    section: "Classical ML",
    question: "Which of these is a distance metric commonly used for categorical data?",
    options: ["Euclidean distance", "Cosine similarity", "Hamming distance", "Manhattan distance"],
    answer: 2,
    explanation: "Hamming distance measures the number of positions at which the corresponding symbols are different."
  },
  {
    id: 37,
    section: "Classical ML",
    question: "What is 'Hierarchical Clustering'?",
    options: [
      "Clustering performed by a neural network.",
      "A method of cluster analysis which seeks to build a hierarchy of clusters.",
      "Sorting the data by volume.",
      "Classification using parent-child nodes."
    ],
    answer: 1,
    explanation: "It produces a tree-based representation (dendrogram) of the data."
  },
  {
    id: 38,
    section: "Classical ML",
    question: "Which of the following is true for 'Lasso' (L1) regression but not 'Ridge' (L2)?",
    options: [
      "It minimizes the sum of squared errors.",
      "It can lead to sparse coefficients (feature selection).",
      "It is always more accurate.",
      "It requires larger learning rates."
    ],
    answer: 1,
    explanation: "Lasso can shrink some coefficients exactly to zero, effectively performing feature selection."
  },
  {
    id: 39,
    section: "Classical ML",
    question: "What is an 'Imbalanced Dataset'?",
    options: [
      "Data with many outliers.",
      "Data where one class significantly outnumbers the other.",
      "Data with missing values.",
      "Data where variables have different scales."
    ],
    answer: 1,
    explanation: "Imbalance (e.g., 99% Class A, 1% Class B) can bias the model toward the majority class."
  },
  {
    id: 40,
    section: "Classical ML",
    question: "What is 'SMOTE' used for?",
    options: [
      "Reducing dimensionality.",
      "Oversampling the minority class in an imbalanced dataset.",
      "Undersampling the majority class.",
      "Hyperparameter optimization."
    ],
    answer: 1,
    explanation: "SMOTE (Synthetic Minority Over-sampling Technique) creates synthetic examples for the minority class."
  },
  {
    id: 41,
    section: "Classical ML",
    question: "What is the 'Elbow Method' used for?",
    options: [
      "Finding the best learning rate.",
      "Determining the optimal number of clusters (K) in K-Means.",
      "Feature selection.",
      "Evaluating regression loss."
    ],
    answer: 1,
    explanation: "The elbow method plots the sum of squared distances to find the point where the rate of decrease shifts significantly."
  },
  {
    id: 42,
    section: "Classical ML",
    question: "In linear regression, what does the R-squared value represent?",
    options: [
      "The correlation coefficient.",
      "The proportion of variance in the dependent variable explained by the independent variables.",
      "The average error.",
      "The maximum weight."
    ],
    answer: 1,
    explanation: "R-squared measures the goodness-of-fit of the model."
  },
  {
    id: 43,
    section: "Classical ML",
    question: "Which cross-validation technique is best for small datasets?",
    options: ["Holdout", "K-Fold", "Leave-One-Out (LOOCV)", "Stratified Sampling"],
    answer: 2,
    explanation: "LOOCV uses all data points except one for training, maximizing the training data usage."
  },
  {
    id: 44,
    section: "Classical ML",
    question: "What is 'Elastic Net' regularization?",
    options: [
      "Only L1 penalty.",
      "Only L2 penalty.",
      "A linear combination of L1 and L2 penalties.",
      "A method for scaling features."
    ],
    answer: 2,
    explanation: "Elastic Net combines both L1 and L2 to handle highly correlated features better."
  },
  {
    id: 45,
    section: "Classical ML",
    question: "In a Decision Tree, what is 'Information Gain'?",
    options: [
      "The increase in training time.",
      "The reduction in Entropy after a split.",
      "The value of the correct prediction.",
      "The depth of the tree."
    ],
    answer: 1,
    explanation: "Information gain = Entropy(Parent) - [Weighted Average] * Entropy(Children)."
  },
  {
    id: 46,
    section: "Classical ML",
    question: "What is 'DBSCAN'?",
    options: [
      "A neural network architecture.",
      "A density-based clustering algorithm.",
      "A deep learning framework.",
      "A data visualization tool."
    ],
    answer: 1,
    explanation: "DBSCAN clusters points based on their density and can identify noise (outliers)."
  },
  {
    id: 47,
    section: "Classical ML",
    question: "Which of these is a common metric for Ranking in search engines?",
    options: ["RMSE", "F1-Score", "nDCG", "Accuracy"],
    answer: 2,
    explanation: "nDCG (Normalized Discounted Cumulative Gain) accounts for the relevance and position of items."
  },
  {
    id: 48,
    section: "Classical ML",
    question: "What does 'Boosting' generally reduce?",
    options: ["Variance", "Bias", "Outliers", "Noise"],
    answer: 1,
    explanation: "Boosting focuses on reducing bias by converting weak learners into a strong learner."
  },
  {
    id: 49,
    section: "Classical ML",
    question: "What is 'One-Hot Encoding'?",
    options: [
      "Converting binary labels to integers.",
      "Representing categorical variables as binary vectors.",
      "Normalizing values to [0, 1].",
      "Compressing the data."
    ],
    answer: 1,
    explanation: "It creates binary features for each unique category label."
  },
  {
    id: 50,
    section: "Classical ML",
    question: "What happens if the learning rate is too high?",
    options: [
      "The model converges faster.",
      "The model might overshoot the minimum and fail to converge.",
      "The model will surely overfit.",
      "Nothing, it is always safe."
    ],
    answer: 1,
    explanation: "A high learning rate can cause the loss to oscillate or diverge."
  },

  // --- Deep Learning (51-80) ---
  {
    id: 51,
    section: "Deep Learning",
    question: "Which activation function is most likely to suffer from the 'Vanishing Gradient' problem in deep layers?",
    options: ["ReLU", "Sigmoid", "Leaky ReLU", "ELU"],
    answer: 1,
    explanation: "Sigmoid gradients are very small for large positive/negative inputs, causing gradients to disappear in backpropagation."
  },
  {
    id: 52,
    section: "Deep Learning",
    question: "What is 'Dropout' used for?",
    options: [
      "Speeding up training.",
      "Regularization to prevent overfitting by randomly disabling neurons.",
      "Initializing weights.",
      "Handling missing data."
    ],
    answer: 1,
    explanation: "Dropout forces the network to learn redundant representations and reduces co-dependency between neurons."
  },
  {
    id: 53,
    section: "Deep Learning",
    question: "In a CNN, what is the role of a 'Pooling' layer?",
    options: [
      "Learning new features.",
      "Reducing spatial dimensions and providing translational invariance.",
      "Adding non-linearity.",
      "Calculating loss."
    ],
    answer: 1,
    explanation: "Max-pooling or average-pooling downsamples the feature maps."
  },
  {
    id: 54,
    section: "Deep Learning",
    question: "Which layer type is fundamental for sequence data like time-series or text?",
    options: ["Convolutional Layer", "Dense Layer", "Recurrent Layer (RNN)", "Batch Normalization Layer"],
    answer: 2,
    explanation: "RNNs use internal loops to process sequences of variable length."
  },
  {
    id: 55,
    section: "Deep Learning",
    question: "What does 'ResNet' stand for and what problem did it solve?",
    options: [
      "Reset Network; slow training.",
      "Residual Network; the degradation problem in very deep networks.",
      "Recursive Network; infinite loops.",
      "Resolution Network; low-quality images."
    ],
    answer: 1,
    explanation: "Residual connections (skip connections) allow gradients to flow through very deep networks without vanishing."
  },
  {
    id: 56,
    section: "Deep Learning",
    question: "In Transformers, what is the core mechanism allowing long-range dependencies?",
    options: ["Convolutions", "Self-Attention", "LSTMs", "Spatial Pyramid Pooling"],
    answer: 1,
    explanation: "Self-attention allows every word in a sequence to attend to every other word directly."
  },
  {
    id: 57,
    section: "Deep Learning",
    question: "What is 'Batch Normalization'?",
    options: [
      "Normalizing the entire dataset.",
      "Normalizing the inputs to each layer for each mini-batch.",
      "A method for weight decay.",
      "Scaling the learning rate."
    ],
    answer: 1,
    explanation: "It stabilizes the training process and allows for higher learning rates."
  },
  {
    id: 58,
    section: "Deep Learning",
    question: "What is a 'GAN' composed of?",
    options: [
      "Two CNNs stacked.",
      "A Generator and a Discriminator.",
      "An Encoder and a Decoder.",
      "An Actor and a Critic."
    ],
    answer: 1,
    explanation: "Generative Adversarial Networks involve two networks competing against each other."
  },
  {
    id: 59,
    section: "Deep Learning",
    question: "Which loss function is standard for multi-class classification?",
    options: ["Mean Squared Error", "Binary Cross-Entropy", "Categorical Cross-Entropy", "Hinge Loss"],
    answer: 2,
    explanation: "Categorical Cross-Entropy measures the difference between probability distributions."
  },
  {
    id: 60,
    section: "Deep Learning",
    question: "What is 'Transfer Learning'?",
    options: [
      "Moving models from one server to another.",
      "Using a pre-trained model on a new, related task.",
      "Humans teaching AI.",
      "Storing data in a database."
    ],
    answer: 1,
    explanation: "It leverages knowledge learned from large datasets like ImageNet for specific tasks with less data."
  },
  {
    id: 61,
    section: "Deep Learning",
    question: "What is 'Softmax'?",
    options: [
      "A method for soft weight updates.",
      "An activation function that outputs a probability distribution over classes.",
      "A type of regularization.",
      "An image filters."
    ],
    answer: 1,
    explanation: "Softmax ensures the outputs sum to 1.0."
  },
  {
    id: 62,
    section: "Deep Learning",
    question: "In an Autoencoder, what is the 'Bottleneck'?",
    options: [
      "A slow layer.",
      "The compressed representation (latent space).",
      "The input layer.",
      "The error function."
    ],
    answer: 1,
    explanation: "The bottleneck forces the network to learn the most essential features (dimensionality reduction)."
  },
  {
    id: 63,
    section: "Deep Learning",
    question: "What is an 'LSTM' and what does it address?",
    options: [
      "Long Short-Term Memory; vanishing gradient in RNNs.",
      "Large Scale Tree Model; slow trees.",
      "Linear Static Task Manager; parallel processing.",
      "Long Sequence Transfer Mode; data loading."
    ],
    answer: 0,
    explanation: "LSTMs use gates to control the flow of information over long time steps."
  },
  {
    id: 64,
    section: "Deep Learning",
    question: "What is 'Stride' in a Convolutional layer?",
    options: [
      "The depth of the filter.",
      "The number of pixels the filter moves at each step.",
      "The padding added to borders.",
      "The number of filters used."
    ],
    answer: 1,
    explanation: "A stride of 2 means the filter skips 1 pixel, reducing output size."
  },
  {
    id: 65,
    section: "Deep Learning",
    question: "What is 'Backpropagation' used for?",
    options: [
      "Calculating the output of the network.",
      "Updating weights by propagating the loss backward using the chain rule.",
      "Cleaning the data.",
      "Sorting the predictions."
    ],
    answer: 1,
    explanation: "It is the fundamental algorithm for training neural networks."
  },
  {
    id: 66,
    section: "Deep Learning",
    question: "What is 'Weights Initialization' like Xavier/Glorot important for?",
    options: [
      "Saving disk space.",
      "Preventing signal saturation or vanishing/exploding gradients at the start.",
      "Speeding up data loading.",
      "Correcting class imbalance."
    ],
    answer: 1,
    explanation: "Proper initialization keeps the variance of activations and gradients consistent across layers."
  },
  {
    id: 67,
    section: "Deep Learning",
    question: "What is 'Fine-Tuning'?",
    options: [
      "Unfreezing a pre-trained model's top layers and training them with a low learning rate.",
      "Retraining the model from scratch.",
      "Changing the labels manually.",
      "Increasing the dataset size."
    ],
    answer: 0,
    explanation: "Fine-tuning adapts a general pre-trained model to a specific domain."
  },
  {
    id: 68,
    section: "Deep Learning",
    question: "What is 'Dead ReLU'?",
    options: [
      "When the network is too deep.",
      "When neurons stop updating weights because their local gradient is zero.",
      "When the RAM is full.",
      "A failed neural network."
    ],
    answer: 1,
    explanation: "If a ReLU neuron's output is always <= 0, its gradient becomes 0 and it stops learning."
  },
  {
    id: 69,
    section: "Deep Learning",
    question: "What is 'Perplexity' in language modeling?",
    options: [
      "The complexity of the words.",
      "An evaluation metric for language models (lower is better).",
      "The number of neurons in the hidden layer.",
      "The speed of inference."
    ],
    answer: 1,
    explanation: "Perplexity measures how well a probability model predicts a sample."
  },
  {
    id: 70,
    section: "Deep Learning",
    question: "What is the 'Attention is All You Need' paper famous for?",
    options: [
      "Introducing GANs.",
      "Introducing the Transformer architecture.",
      "Proving ReLU is better than Sigmoid.",
      "Explaining Gradient Descent."
    ],
    answer: 1,
    explanation: "This 2017 paper revolutionized NLP by removing recurrence in favor of self-attention."
  },
  {
    id: 71,
    section: "Deep Learning",
    question: "What is 'Data Augmentation'?",
    options: [
      "Generating hard labels for data.",
      "Increasing training data volume by creating modified versions (rotation, flip, noise).",
      "Buying more data.",
      "Compressing existing data."
    ],
    answer: 1,
    explanation: "Augmentation helps improve generalization and prevents overfitting."
  },
  {
    id: 72,
    section: "Deep Learning",
    question: "In Reinforcement Learning, what is a 'Bellman Equation' fundamentally used for?",
    options: [
      "Calculating the loss function.",
      "Defining the relationship between the current state value and the next state value.",
      "Normalizing the reward.",
      "Sorting the actions."
    ],
    answer: 1,
    explanation: "It is the basis for Q-learning and value iteration."
  },
  {
    id: 73,
    section: "Deep Learning",
    question: "What is 'YOLO' (You Only Look Once)?",
    options: [
      "A sequence to sequence model.",
      "A real-time object detection system.",
      "A type of recurring layer.",
      "A data cleaning library."
    ],
    answer: 1,
    explanation: "YOLO treats object detection as a regression problem to spatially separated bounding boxes and associated class probabilities."
  },
  {
    id: 74,
    section: "Deep Learning",
    question: "What is 'Leaky ReLU' compared to ROI?",
    options: [
      "It has a small slope for negative inputs.",
      "It is only for positive inputs.",
      "It is more complex.",
      "It is slower."
    ],
    answer: 0,
    explanation: "Leaky ReLU prevents dead neurons by allowing a small gradient when x < 0."
  },
  {
    id: 75,
    section: "Deep Learning",
    question: "What does 'Epoch' mean in training?",
    options: [
      "One training step.",
      "One full pass over the entire training dataset.",
      "Processing one batch.",
      "The lifetime of the model."
    ],
    answer: 1,
    explanation: "Training typically requires many epochs for the weights to converge."
  },
  {
    id: 76,
    section: "Deep Learning",
    question: "What is an 'Encoder-Decoder' architecture used for?",
    options: [
      "Image categorization.",
      "Sequence-to-Sequence tasks like Machine Translation.",
      "Binary classification.",
      "Weight initialization."
    ],
    answer: 1,
    explanation: "The encoder summarizes the input sequence, and the decoder generates the output sequence."
  },
  {
    id: 77,
    section: "Deep Learning",
    question: "What is 'Stationarity' in time-series data?",
    options: [
      "When the data is constant.",
      "When statistical properties (mean, variance) don't change over time.",
      "When there are no missing values.",
      "When the series is cyclic."
    ],
    answer: 1,
    explanation: "Many time-series models (like ARIMA) require stationary data."
  },
  {
    id: 78,
    section: "Deep Learning",
    question: "What is 'Turing Test'?",
    options: [
      "A test for model performance.",
      "A test of a machine's ability to exhibit intelligent behavior equivalent to that of a human.",
      "A mathematical proof.",
      "A stress test for CPUs."
    ],
    answer: 1,
    explanation: "Alan Turing proposed this in 1950 to decide if machines can think."
  },
  {
    id: 79,
    section: "Deep Learning",
    question: "What is 'Embedding' in NLP?",
    options: [
      "Fixing words into a database.",
      "Dense vector representation of words where similar words have similar vectors.",
      "Removing stop words.",
      "Converting text to ASCII."
    ],
    answer: 1,
    explanation: "Embeddings (Word2Vec, GloVe) capture semantic meanings in a continuous space."
  },
  {
    id: 80,
    section: "Deep Learning",
    question: "What are 'Hyperparameters'?",
    options: [
      "The parameters learned from data (weights).",
      "Parameters set before the learning process begins (learning rate, batch size).",
      "The outputs of the hidden layer.",
      "The labels of the data."
    ],
    answer: 1,
    explanation: "Hyperparameters are used to control the learning process."
  },

  // --- NLP, CV & MLOps (81-100) ---
  {
    id: 81,
    section: "NLP & CV",
    question: "What is 'Intersection over Union' (IoU) used for in CV?",
    options: [
      "Merging two images.",
      "Evaluating the overlap between a predicted bounding box and a ground truth box.",
      "Resizing images.",
      "Color correction."
    ],
    answer: 1,
    explanation: "IoU is the standard metric for object detection accuracy."
  },
  {
    id: 82,
    section: "NLP & CV",
    question: "What is 'Stemming' and 'Lemmatization'?",
    options: [
      "Data scaling techniques.",
      "Text normalization techniques to reduce words to their base form.",
      "Feature extraction for images.",
      "Deep learning optimization."
    ],
    answer: 1,
    explanation: "Stemming is heuristic (removes endings), Lemmatization uses vocabulary and morphological analysis."
  },
  {
    id: 83,
    section: "NLP & CV",
    question: "What does 'TF-IDF' stand for?",
    options: [
      "Terminal Frequency - Inverse Data Flow.",
      "Term Frequency - Inverse Document Frequency.",
      "Total Frequency - Identical Document Factor.",
      "Text Formatting - Inverse Data Field."
    ],
    answer: 1,
    explanation: "It evaluates how important a word is to a document in a collection or corpus."
  },
  {
    id: 84,
    section: "NLP & CV",
    question: "Which of these is a typical CV task?",
    options: ["Sentiment Analysis", "Semantic Segmentation", "Entity Recognition", "Part of Speech Tagging"],
    answer: 1,
    explanation: "Segmentation involves labeling every pixel in an image with a category."
  },
  {
    id: 85,
    section: "NLP & CV",
    question: "What is 'Zero-Shot Learning'?",
    options: [
      "Training without data.",
      "Ability of a model to recognize concepts it did not see during training.",
      "A model with zero accuracy.",
      "A very fast training method."
    ],
    answer: 1,
    explanation: "Zero-shot learning relies on high-level descriptions or attributes to generalize."
  },
  {
    id: 86,
    section: "MLOps",
    question: "What is 'Concept Drift'?",
    options: [
      "When the code becomes outdated.",
      "When the statistical properties of the target variable change over time.",
      "When the training server dies.",
      "A bug in the model logic."
    ],
    answer: 1,
    explanation: "Model performance degrades as 'real-world' relations change from training data."
  },
  {
    id: 87,
    section: "MLOps",
    question: "What is 'Data Version Control' (DVC) primarily used for?",
    options: [
      "Writing SQL queries.",
      "Tracking datasets and machine learning models alongside code.",
      "Cleaning CSV files.",
      "Visualizing charts."
    ],
    answer: 1,
    explanation: "DVC is Git for data."
  },
  {
    id: 88,
    section: "MLOps",
    question: "What is 'Model Quantization'?",
    options: [
      "Adding more layers.",
      "Reducing the precision of weights (e.g., from Float32 to Int8) to speed up inference.",
      "Increasing data count.",
      "Analyzing the model using quantum computers."
    ],
    answer: 1,
    explanation: "Quantization is vital for deploying large models on mobile or edge devices."
  },
  {
    id: 89,
    section: "MLOps",
    question: "What does 'CI/CD' stand for in MLOps?",
    options: [
      "Continuous Integration and Continuous Deployment.",
      "Computational Intelligence and Data.",
      "Categorical Integration and Coding.",
      "Cluster Integration and Deployment."
    ],
    answer: 0,
    explanation: "It automates the testing and deployment of ML pipelines."
  },
  {
    id: 90,
    section: "MLOps",
    question: "What is 'Kubeflow'?",
    options: [
      "A type of gradient descent.",
      "A cloud-native platform for ML pipelines on Kubernetes.",
      "A database engine.",
      "An image processing library."
    ],
    answer: 1,
    explanation: "Kubeflow makes it easier to deploy and manage ML workflows at scale."
  },
  {
    id: 91,
    section: "NLP & CV",
    question: "What is 'Attention Mask' in Transformers used for?",
    options: [
      "Hiding information for the user.",
      "Preventing the model from attending to padding tokens.",
      "Highlighting important pixels.",
      "Speeding up convolutions."
    ],
    answer: 1,
    explanation: "Masking ensures variable-length sequences don't process meaningless padding."
  },
  {
    id: 92,
    section: "NLP & CV",
    question: "What is 'BERT'?",
    options: [
      "Bidirectional Encoder Representations from Transformers.",
      "Basic Entity Recognition Tool.",
      "Binary Encoder and Receiver Tool.",
      "Bidirectional Entity and Recursive Tree."
    ],
    answer: 0,
    explanation: "BERT is an NLP model developed by Google that reads text bidirectionally."
  },
  {
    id: 93,
    section: "NLP & CV",
    question: "What is 'Vision Transformer' (ViT)?",
    options: [
      "Transformers applied to Natural Language.",
      "Applying the Transformer architecture directly to image patches.",
      "A headset for seeing AI.",
      "A CNN variation."
    ],
    answer: 1,
    explanation: "ViT proved that Transformers can perform as well as CNNs on vision tasks."
  },
  {
    id: 94,
    section: "NLP & CV",
    question: "What is 'Named Entity Recognition' (NER)?",
    options: [
      "Recognizing images.",
      "Identifying and categorizing key information (entities) in text.",
      "Naming the variables in code.",
      "Sorting the classes."
    ],
    answer: 1,
    explanation: "NER extracts names, dates, locations, etc., from unstructured text."
  },
  {
    id: 95,
    section: "NLP & CV",
    question: "What is 'Non-Maximum Suppression' (NMS)?",
    options: [
      "Removing empty folders.",
      "Selecting the best bounding box among many overlapping candidates.",
      "Calculating loss.",
      "Regularizing the weights."
    ],
    answer: 1,
    explanation: "NMS is essential in object detection to remove redundant box predictions."
  },
  {
    id: 96,
    section: "MLOps",
    question: "What is 'A/B Testing' in production?",
    options: [
      "Testing two different versions of a model by splitting real traffic.",
      "Testing the model twice.",
      "Testing A and B variables.",
      "Training two models A and B."
    ],
    answer: 0,
    explanation: "A/B testing evaluates real-world metrics like click-through rate for different model variants."
  },
  {
    id: 97,
    section: "MLOps",
    question: "What is 'Shadow Deployment'?",
    options: [
      "Deploying at night.",
      "Running a new model alongside the production model but not using its output for real decisions.",
      "A failed deployment.",
      "An anonymous app release."
    ],
    answer: 1,
    explanation: "It allows testing a model's performance on real data without impacting users."
  },
  {
    id: 98,
    section: "MLOps",
    question: "What is 'Feature Store'?",
    options: [
      "A shop for features.",
      "A centralized repository for storing and managing model features.",
      "A type of hardware.",
      "A visualization tool."
    ],
    answer: 1,
    explanation: "Feature stores ensure consistency between training and serving features."
  },
  {
    id: 99,
    section: "MLOps",
    question: "What is 'Hyperparameter Tuning' using 'Grid Search'?",
    options: [
      "Randomly picking values.",
      "Exhaustively searching through a specified subset of hyperparameters.",
      "Using a neural network to tune another.",
      "A visualization for graphs."
    ],
    answer: 1,
    explanation: "Grid search is reliable but computationally expensive compared to Random Search."
  },
  {
    id: 100,
    section: "MLOps",
    question: "Final Question: What is 'Explainable AI' (XAI)?",
    options: [
      "AI that can talk.",
      "Tools and techniques to understand and interpret model results.",
      "Models that have zero loss.",
      "Simplifying the model to just one neuron."
    ],
    answer: 1,
    explanation: "XAI (like SHAP, LIME) helps build trust and debug black-box models."
  },
  // --- MySQL & Data Engineering (101-125) ---
  {
    id: 101,
    section: "MySQL & Data",
    question: "What is the primary difference between 'DELETE' and 'TRUNCATE' in MySQL?",
    options: [
      "DELETE is faster than TRUNCATE.",
      "DELETE is a DML command and can be rolled back; TRUNCATE is DDL and cannot.",
      "TRUNCATE deletes specific rows using a WHERE clause.",
      "They are identical in performance and behavior."
    ],
    answer: 1,
    explanation: "DELETE removes rows one by one and logs them, while TRUNCATE deallocates pages and is much faster but less granular."
  },
  {
    id: 102,
    section: "MySQL & Data",
    question: "Which of the following describes an 'Index' in MySQL most accurately?",
    options: [
      "A copy of the entire table for backup.",
      "A data structure that improves the speed of data retrieval at the cost of write speed.",
      "A method for encrypting sensitive columns.",
      "A constraint that prevents duplicate entries."
    ],
    answer: 1,
    explanation: "Indexes speed up SELECT queries but require extra work during INSERT/UPDATE to maintain the structure (usually a B-Tree)."
  },
  {
    id: 103,
    section: "MySQL & Data",
    question: "What does the 'ACID' acronym stand for in database transactions?",
    options: [
      "Accuracy, Consistency, Isolation, Durability",
      "Atomicity, Consistency, Isolation, Durability",
      "Atomicity, Complexity, Integrity, Data",
      "Access, Control, Integrity, Distribution"
    ],
    answer: 1,
    explanation: "ACID properties ensure that database transactions are processed reliably."
  },
  {
    id: 104,
    section: "MySQL & Data",
    question: "Which JOIN returns all records from the left table and the matched records from the right table?",
    options: ["INNER JOIN", "RIGHT JOIN", "LEFT JOIN", "CROSS JOIN"],
    answer: 2,
    explanation: "LEFT JOIN (or LEFT OUTER JOIN) ensures no data from the 'driving' table is lost if no match exists."
  },
  {
    id: 105,
    section: "MySQL & Data",
    question: "What is the purpose of the 'GROUP BY' clause?",
    options: [
      "To sort the results alphabetically.",
      "To filter rows based on a condition.",
      "To arrange identical data into groups, often used with aggregate functions.",
      "To join two tables together."
    ],
    answer: 2,
    explanation: "GROUP BY is used with functions like COUNT, MAX, and AVG to summarize data subsets."
  },
  {
    id: 106,
    section: "MySQL & Data",
    question: "What is a 'Primary Key'?",
    options: [
      "A key that can have null values.",
      "A unique identifier for a row that cannot be null.",
      "A reference to a column in another table.",
      "A key used for primary encryption."
    ],
    answer: 1,
    explanation: "Primary keys uniquely identify records and are automatically indexed for performance."
  },
  {
    id: 107,
    section: "MySQL & Data",
    question: "What is the 'HAVING' clause used for?",
    options: [
      "Filtering rows before grouping.",
      "Filtering groups after the GROUP BY clause has been applied.",
      "Substituting for the WHERE clause always.",
      "Creating a temporary column."
    ],
    answer: 1,
    explanation: "WHERE filters rows; HAVING filters groups (aggregates)."
  },
  {
    id: 108,
    section: "MySQL & Data",
    question: "In MySQL, what is the default storage engine for version 8.0?",
    options: ["MyISAM", "Memory", "InnoDB", "CSV"],
    answer: 2,
    explanation: "InnoDB is the standard ACID-compliant storage engine for MySQL."
  },
  {
    id: 109,
    section: "MySQL & Data",
    question: "What is a 'Foreign Key'?",
    options: [
      "A key used by external users.",
      "A column that creates a link between data in two tables.",
      "A backup key.",
      "A key that must be a string."
    ],
    answer: 1,
    explanation: "Foreign keys enforce referential integrity between related entities."
  },
  {
    id: 110,
    section: "MySQL & Data",
    question: "Which command is used to remove all records from a table without deleting the table structure?",
    options: ["DROP", "REMOVE", "TRUNCATE", "CLEAR"],
    answer: 2,
    explanation: "TRUNCATE table_name; removes all data but keeps the columns and types intact."
  },
  // --- Extra Advanced AIML (111-125) ---
  {
    id: 111,
    section: "Advanced AIML",
    question: "What is 'Teacher Forcing' in RNN training?",
    options: [
      "Having a human correct the model in real time.",
      "Using the ground truth from the previous time step as input instead of the model's own output.",
      "Increasing the penalty for wrong answers.",
      "Using a smaller teaching model to train a larger one."
    ],
    answer: 1,
    explanation: "Teacher forcing helps models converge faster by preventing errors from compounding during early training."
  },
  {
    id: 112,
    section: "Advanced AIML",
    question: "What is 'Knowledge Distillation'?",
    options: [
      "Compressed learning from data.",
      "Training a small 'student' model to mimic the behavior of a large 'teacher' model.",
      "Removing duplicate data points.",
      "Converting a neural network to a decision tree."
    ],
    answer: 1,
    explanation: "Knowledge distillation is used for model compression while maintaining higher accuracy than training from scratch."
  },
  {
    id: 113,
    section: "Advanced AIML",
    question: "In the context of GANs, what is 'Mode Collapse'?",
    options: [
      "The model stops training.",
      "The Generator produces only a limited variety of outputs regardless of input.",
      "The Discriminator always wins.",
      "The datasets are too small."
    ],
    answer: 1,
    explanation: "Mode collapse occurs when the generator finds a specific output that the discriminator can't easily catch, and stops exploring other possibilities."
  },
  {
    id: 114,
    section: "Advanced AIML",
    question: "What is 'Catastrophic Forgetting' in AI?",
    options: [
      "The model losing all weights.",
      "When an artificial neural network completely forgets previously learned task information upon learning new information.",
      "A system crash.",
      "Deleting the training logs."
    ],
    answer: 1,
    explanation: "This is a major challenge in Continual or Incremental Learning."
  },
  {
    id: 115,
    section: "Advanced AIML",
    question: "What is 'FLOPs' a measure of?",
    options: [
      "Model size on disk.",
      "Floating Point Operations per second; a measure of computational complexity.",
      "Data throughput speed.",
      "Accuracy loss per epoch."
    ],
    answer: 1,
    explanation: "FLOPs are used to estimate the hardware requirements for training or inference."
  },
  // --- Programming & Backend (116-130) ---
  {
    id: 116,
    section: "Programming & Backend",
    question: "In Python, what is the difference between a 'List' and a 'Tuple'?",
    options: [
      "Lists are immutable, Tuples are mutable.",
      "Lists are faster for lookup.",
      "Tuples are immutable; once created, they cannot be changed.",
      "They are identical in Python 3.x."
    ],
    answer: 2,
    explanation: "Tuples are immutable, which makes them slightly faster and memory-efficient for constant data."
  },
  {
    id: 117,
    section: "Programming & Backend",
    question: "What is 'Asynchronous Programming' (async/await) primarily used for in Node.js/FastAPI?",
    options: [
      "Running loops faster.",
      "Handling non-blocking I/O operations effectively.",
      "Increasing the number of CPU cores used.",
      "Encrypting data in transit."
    ],
    answer: 1,
    explanation: "Async allows the server to handle other requests while waiting for I/O (like DB or network calls) to complete."
  },
  {
    id: 118,
    section: "Programming & Backend",
    question: "What does a '404' HTTP status code indicate?",
    options: ["Internal Server Error", "Unauthorized Access", "Resource Not Found", "Bad Request"],
    answer: 2,
    explanation: "404 is the client-side error indicating the requested URL does not exist."
  },
  {
    id: 119,
    section: "Programming & Backend",
    question: "In TypeScript, what is an 'Interface' used for?",
    options: [
      "Writing the actual logic of a function.",
      "Defining the shape and contract of an object.",
      "Compiling code to C++.",
      "Connecting to a database."
    ],
    answer: 1,
    explanation: "Interfaces define structures that objects must adhere to for type safety."
  },
  {
    id: 120,
    section: "Programming & Backend",
    question: "What is 'Middleware' in Express or FastAPI?",
    options: [
      "The physical hardware in the middle.",
      "Functions that have access to the request and response objects to process them before the final route handler.",
      "A type of CSS framework.",
      "A database between two servers."
    ],
    answer: 1,
    explanation: "Middleware is used for logging, auth checks, data parsing, etc."
  },
  // --- Frontend Development (131-140) ---
  {
    id: 121,
    section: "Frontend",
    question: "In React, what is the 'Virtual DOM'?",
    options: [
      "A direct copy of the HTML file.",
      "A lightweight representation of the actual DOM used to optimize re-rendering.",
      "A browser extension for developers.",
      "The server-side version of a website."
    ],
    answer: 1,
    explanation: "React compares the Virtual DOM with the real one to update only the changed elements (diffing)."
  },
  {
    id: 122,
    section: "Frontend",
    question: "What does 'Tailwind CSS' emphasize as its core approach?",
    options: [
      "Writing custom CSS for every component.",
      "Using utility-first classes to build designs directly in HTML.",
      "Pre-built themes that can't be changed.",
      "Logic-driven styling using JavaScript only."
    ],
    answer: 1,
    explanation: "Tailwind focuses on small, reusable utility classes rather than complex CSS files."
  },
  {
    id: 123,
    section: "Frontend",
    question: "What is a 'Hook' in React (e.g., useState)?",
    options: [
      "A way to fetch external APIs only.",
      "A function that lets you 'hook into' React state and lifecycle features from functional components.",
      "A tool for linking different files.",
      "An event listener for mice."
    ],
    answer: 1,
    explanation: "Hooks allow stateful logic in functional components without writing classes."
  },
  // --- GenAI & LLMs (141-150) ---
  {
    id: 124,
    section: "LLMs & GenAI",
    question: "What is 'Zero-Shot Prompting'?",
    options: [
      "Asking an LLM a task without providing any examples in the prompt.",
      "Using zero parameters for the model.",
      "A prompt that has no text.",
      "Training a model from scratch."
    ],
    answer: 0,
    explanation: "The model relies entirely on its pre-existing knowledge to solve the task."
  },
  {
    id: 125,
    section: "LLMs & GenAI",
    question: "What does 'Hallucination' refer to in LLMs?",
    options: [
      "The model becoming sentient.",
      "The model generating confident but factually incorrect or nonsensical information.",
      "A user seeing visions while using AI.",
      "The model running out of memory."
    ],
    answer: 1,
    explanation: "LLMs predict the next word, which can lead to plausible but untrue statements."
  },
  {
    id: 126,
    section: "LLMs & GenAI",
    question: "What is 'RAG' (Retrieval-Augmented Generation)?",
    options: [
      "A method to make models smaller.",
      "Providing an LLM with external data (from a DB or search) to improve its answers.",
      "A type of neural network layer.",
      "A technique for image generation."
    ],
    answer: 1,
    explanation: "RAG connects the LLM to live, factual data outside its training weights."
  },
  {
    id: 127,
    section: "LLMs & GenAI",
    question: "What is 'Few-Shot Prompting'?",
    options: [
      "Providing a few examples of the task within the prompt to guide the LLM.",
      "Training the model for a few more epochs.",
      "Only using a small part of the model.",
      "A prompt that takes a few seconds to run."
    ],
    answer: 0,
    explanation: "Providing 1-5 examples significantly improves performance on specific formatting tasks."
  },
  // --- Version Control & Collaboration (151-160) ---
  {
    id: 128,
    section: "Git & Version Control",
    question: "What is the command to create a new branch and switch to it immediately?",
    options: ["git branch new-name", "git checkout -b new-name", "git push new-name", "git commit -n new-name"],
    answer: 1,
    explanation: "git checkout -b combines creating and switching into one command."
  },
  {
    id: 129,
    section: "Git & Version Control",
    question: "What is a 'Merge Conflict'?",
    options: [
      "When two developers have a disagreement.",
      "When Git cannot automatically reconcile differences in code between two commits.",
      "When the server is down.",
      "When a commit is too large."
    ],
    answer: 1,
    explanation: "Conflicts occur when changes overlap on the same lines in different branches."
  },
  {
    id: 130,
    section: "Git & Version Control",
    question: "What does 'git pull' actually do?",
    options: [
      "Only downloads the changes.",
      "Downloads and integrates remote changes (fetch + merge).",
      "Uploads your local changes.",
      "Deletes the local repository."
    ],
    answer: 1,
    explanation: "Pull is a combination of fetching the data and merging it into your current branch."
  },
  // --- Problem Solving & Logic (131-140) ---
  {
    id: 131,
    section: "Problem Solving",
    question: "If you have 8 identical-looking balls and one is slightly heavier, what is the minimum number of weighings on a balance scale to find the heavy one?",
    options: ["1", "2", "3", "4"],
    answer: 1,
    explanation: "Divide into 3 groups (3, 3, 2). Weigh 3 vs 3. If equal, weigh the 2. If not, weigh 2 from the heavier 3. Total: 2 weighings."
  },
  {
    id: 132,
    section: "Problem Solving",
    question: "In a 'Microservices' architecture, which pattern is often used to ensure eventual consistency across distributed databases?",
    options: ["Two-Phase Commit (2PC)", "Saga Pattern", "Global Locking", "Single Central Database"],
    answer: 1,
    explanation: "The Saga pattern uses a sequence of local transactions and compensating transactions to manage distributed state."
  },
  {
    id: 133,
    section: "Problem Solving",
    question: "What is 'Big O' notation used for primarily?",
    options: [
      "Measuring the exact number of seconds a program runs.",
      "Describing the upper bound of the complexity (time or space) of an algorithm relative to input size.",
      "Calculating the storage size of a file.",
      "The version of a software release."
    ],
    answer: 1,
    explanation: "Big O helps developers understand how an algorithm scales as data grows."
  }
];
