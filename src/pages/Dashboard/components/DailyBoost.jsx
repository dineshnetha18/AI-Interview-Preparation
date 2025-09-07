import React, { useState } from 'react'
import { LuRefreshCcw } from 'react-icons/lu';
import { FaRegLightbulb } from 'react-icons/fa';
import { IoCodeSharp } from 'react-icons/io5';
import { LuArrowRight } from 'react-icons/lu';

const tips = [
  "Practice the STAR method for behavioral questions to structure your responses effectively.",
  "Always clarify requirements before jumping into coding solutions.",
  "Think out loud during technical interviews to show your problem-solving process.",
  "Prepare specific examples that demonstrate your impact and achievements.",
];

const challenges = [
  {
    title: "Two Sum Problem",
    difficulty: "Easy",
    topic: "Array, Hash Table",
    description: "Find two numbers in an array that add up to a target sum.",
  },
  {
    title: "Longest Substring",
    difficulty: "Medium", 
    topic: "String, Sliding Window",
    description: "Find the length of the longest substring without repeating characters.",
  },
  {
    title: "Binary Tree Traversal",
    difficulty: "Medium",
    topic: "Tree, DFS",
    description: "Implement inorder, preorder, and postorder traversal of a binary tree.",
  },
];

const DailyBoost = () => {
    const [activeTab, setActiveTab] = useState("tips");
    const [currentTipIndex, setCurrentTipIndex] = useState(0);
    const [currentChallengeIndex, setCurrentChallengeIndex] = useState(0);

  const getNextTip = () => {
    setCurrentTipIndex((prev) => (prev + 1) % tips.length);
  };

  const getNextChallenge = () => {
    setCurrentChallengeIndex((prev) => (prev + 1) % challenges.length);
  };

  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
        case "Easy":
            return "text-green-500";
        case "Medium":
            return "text-yellow-500";
        case "Hard":
            return "text-red-500";
        default:
            return "text-gray-500";    
  }
}
  return (
    <div className='flex flex-col h-full justify-between mt-6 hover:shadow-[0_0_20px_#5866F24D] text-white bg-[#6B6BFA]/5 border border-[#6B6BFA]/15 rounded-xl p-6 '>
        <div className='mb-6'>
      <div className='flex justify-between text-white'>
        <h2 className='text-[1.2rem]  font-bold'>Daily Boost</h2>
         <button
            onClick={activeTab === "tips" ? getNextTip : getNextChallenge}
            className="p-2 hover:bg-[#0C1130] rounded-lg transition-colors duration-300"
            title="Get new content"
          >
            <LuRefreshCcw className="w-4 h-4 text-white/80 cursor-pointer hover:text-white" />
          </button>
      </div>
      <div className="flex space-x-2 mt-4 bg-[#0C1130]/30 rounded-xl p-1">
          <button
            onClick={() => setActiveTab("tips")}
            className={`flex-1 py-2 px-3 rounded-md cursor-pointer gap-x-1.5 flex items-center justify-center text-sm font-medium transition-colors duration-300 ${
              activeTab === "tips"
                ? "bg-[#6B6BFA] text-[#06091A]"
                : "hover:text-white"
            }`}
          >
            <FaRegLightbulb className="text-[1rem]" />
            Tips
          </button>
          <button
            onClick={() => setActiveTab("challenges")}
            className={`flex-1 py-2 px-3 rounded-md cursor-pointer text-sm gap-x-1.5 font-medium flex items-center justify-center space-x-2 transition-colors duration-300 ${
              activeTab === "challenges"
                ? "bg-[#6B6BFA] text-[#06091A]"
                : "hover:text-white"
            }`}
          >
            <IoCodeSharp className="text-[1rem]" />
            Challenges
          </button>
        </div>
        </div>

        {activeTab === "tips" ? (
        <div className="space-y-4 text-white">
          <div className="p-4 rounded-lg">
            <div className="flex items-start space-x-3">
              <FaRegLightbulb className="text-[1.8rem] bg-[#6B6BFA]/20 text-[#6B6BFA] rounded-full flex items-center justify-center p-1.5" />
              <div>
                <h3 className="font-semibold text-[1rem] mb-1.5">Tip of the Day</h3>
                <p className="text-[0.85rem] text-white/70">
                  {tips[currentTipIndex]}
                </p>
              </div>
            </div>
          </div>
          
          <button className="w-full py-2 cursor-pointer px-4 bg-[#6B6BFA]/10 hover:bg-[#6B6BFA]/20 text-[#6B6BFA] font-medium rounded-lg transition-colors duration-300 flex items-center justify-center space-x-2">
            <span>More Tips</span>
            <LuArrowRight className="w-4 h-4" />
          </button>
        </div>
      ) : (
        <div className="space-y-4 text-white">
          <div className="p-4 rounded-lg">
            <div className="flex items-start space-x-3">
              <div className="w-8 h-8 bg-[#33CCFF]/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                <IoCodeSharp className="text-[1.5rem] text-[#33CCFF]" />
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-semibold">{challenges[currentChallengeIndex].title}</h3>
                  <span className={`text-xs font-medium px-2 py-1 rounded ${getDifficultyColor(challenges[currentChallengeIndex].difficulty)}`}>
                    {challenges[currentChallengeIndex].difficulty}
                  </span>
                </div>
                <p className="text-white/70 text-sm mb-2">
                  {challenges[currentChallengeIndex].description}
                </p>
                <div className="text-xs text-white/70">
                  Topics: <span className='text-white'>{challenges[currentChallengeIndex].topic}</span>
                </div>
              </div>
            </div>
          </div>

          <button className="w-full cursor-pointer py-2 px-4 bg-[#33CCFF]/10 hover:bg-[#33CCFF]/20 text-[#33CCFF] font-medium rounded-lg transition-colors duration-300 flex items-center justify-center space-x-2">
            <span>Start Challenge</span>
            <LuArrowRight className="w-4 h-4" />
          </button>
        </div>
      )}

    </div>
  )
}

export default DailyBoost
