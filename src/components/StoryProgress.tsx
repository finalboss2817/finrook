import React from 'react';

interface StoryProgressProps {
  activeChapter: number;
  onSelectChapter: (chapterIndex: number) => void;
}

export const StoryProgress: React.FC<StoryProgressProps> = ({
  activeChapter,
  onSelectChapter,
}) => {
  const chapters = [
    { num: '01', title: 'Before the Move', target: '#hero' },
    { num: '02', title: '3D Story Experience', target: '#story-experience' },
    { num: '03', title: 'The Disconnect', target: '#story' },
    { num: '04', title: 'What We Do', target: '#arenas' },
    { num: '05', title: 'Choose Your Move', target: '#pathways' },
    { num: '06', title: 'How It Works', target: '#playbook' },
    { num: '07', title: 'The Standard', target: '#rules' },
    { num: '08', title: 'Make Your Move', target: '#inquiry' },
  ];

  return (
    <aside
      className="fixed right-6 top-1/2 -translate-y-1/2 z-40 hidden xl:flex flex-col items-end gap-2.5 select-none pointer-events-auto"
      aria-label="Story chapter progression"
    >
      <div className="bg-[#FFFFFF]/90 backdrop-blur-md p-3 rounded-lg border border-[#E5DFC0] shadow-md flex flex-col gap-1.5 w-52">
        <div className="text-[10px] uppercase tracking-wider text-[#6E6A61] px-2 font-mono flex items-center justify-between font-semibold">
          <span>CHAPTER {String(activeChapter).padStart(2, '0')} / 08</span>
          <span className="w-2 h-2 rounded-full bg-[#E1382B]" />
        </div>
        <div className="w-full h-px bg-[#ECE6D8]" />
        {chapters.map((chap, idx) => {
          const chapterNum = idx + 1;
          const isActive = activeChapter === chapterNum;
          return (
            <button
              key={chap.num}
              type="button"
              onClick={() => onSelectChapter(chapterNum)}
              className={`group flex items-center justify-between gap-2 text-left px-2 py-1.5 rounded transition-all cursor-pointer ${
                isActive
                  ? 'text-[#141518] font-bold bg-[#FAF8F5] border border-[#E5DFC0]'
                  : 'text-[#6E6A61] hover:text-[#141518] hover:bg-[#F8F6F1]'
              }`}
            >
              <span className="text-xs truncate">{chap.title}</span>
              <span
                className={`text-[10px] font-mono shrink-0 ${
                  isActive ? 'text-[#E1382B] font-bold' : 'text-[#A09C94]'
                }`}
              >
                {chap.num}
              </span>
            </button>
          );
        })}
      </div>
    </aside>
  );
};
