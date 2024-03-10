# Sorting Visualizer

This project is a sorting visualizer that allows users to interactively see how various sorting algorithms work. It implements five popular sorting algorithms: Quick Sort, Merge Sort, Selection Sort, Insertion Sort, and Bubble Sort.

## Purpose

The purpose of this project is to provide a visual demonstration of different sorting algorithms to help users understand how they work and compare their performance.

## Live Link

You can view the live demo of the sorting visualizer [here](https://piyush-0007.github.io/Sorting-Visualiser/).

## Sorting Algorithms

### Quick Sort

Quick Sort is a highly efficient sorting algorithm known for its speed and widely used in practice. It works by partitioning an array into smaller sub-arrays and recursively sorting them.

- Time Complexity:
  - Best Case: O(n log n)
  - Worst Case: O(n^2)
- Space Complexity: O(log n)

### Merge Sort

Merge Sort is a divide-and-conquer algorithm that divides the input array into two halves, sorts each half, and then merges them.

- Time Complexity: O(n log n)
- Space Complexity: O(n)

### Selection Sort

Selection Sort is a simple sorting algorithm that repeatedly finds the minimum element from the unsorted portion of the array and puts it at the beginning.

- Time Complexity: O(n^2)
- Space Complexity: O(1)

### Insertion Sort

Insertion Sort builds the final sorted array one element at a time by repeatedly taking the next element and inserting it into the proper position in the already sorted part of the array.

- Time Complexity:
  - Best Case: O(n)
  - Worst Case: O(n^2)
- Space Complexity: O(1)

### Bubble Sort

Bubble Sort compares adjacent elements and swaps them if they are in the wrong order. It continues iterating through the array until no swaps are needed.

- Time Complexity:
  - Best Case: O(n)
  - Worst Case: O(n^2)
- Space Complexity: O(1)

## Comparison Table

| Algorithm     | Best Time Complexity | Worst Time Complexity | Space Complexity |
|---------------|----------------------|-----------------------|------------------|
| Quick Sort    | O(n log n)           | O(n^2)                | O(log n)         |
| Merge Sort    | O(n log n)           | O(n log n)            | O(n)             |
| Selection Sort| O(n^2)               | O(n^2)                | O(1)             |
| Insertion Sort| O(n)                 | O(n^2)                | O(1)             |
| Bubble Sort   | O(n)                 | O(n^2)                | O(1)             |

## Speed Control

Users can control the speed of the sorting animation using the following options:

- 0.25x
- 0.5x
- 0.75x
- 1x (default)
- 1.25x
- 1.5x
- 1.75x
- 2x
- 3x

## Limitations

Currently, the sorting visualizer may have the following limitations:
- Lack of responsiveness: The visualizer may not display optimally on all screen sizes and devices.
- Limited sorting algorithms: While the visualizer includes several popular sorting algorithms, there may be other algorithms that are not yet implemented.

## Future Goals

To improve the sorting visualizer, the following enhancements are planned:
- Responsiveness: Implement responsive design to ensure optimal viewing experience across various devices and screen sizes.
- More sorting algorithms: Add support for additional popular sorting algorithms such as Radix Sort, Heap Sort, and Shell Sort.
- Custom data input: Allow users to input custom data sets for sorting, enabling them to visualize the performance of algorithms on their own data.


---