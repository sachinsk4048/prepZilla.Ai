//InterviewPrepAi\frontend\src\Pages\InterviewPrep\InterviewPrep.jsx

import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import moment from "moment";
import { AnimatePresence, motion, useScroll } from "framer-motion";
import { LuCircleAlert, LuListCollapse } from "react-icons/lu";
import SpinnerLoader from "../../components/Loader/SpinnerLoader";
import { toast } from "react-hot-toast";
import DashboardLayout from "../../components/layout/DashboardLayout";
import RoleInfoHeader from "./components/RoleInfoHeader";
import axiosInstance from "../../utils/axiosInstance";
import { API_PATHS } from "../../utils/apiPaths";
import QuestionCard from "../../components/Cards/QuestionCard";
import AIResponsePreview from "./components/AIResponsePreview";
import Drawer from "../../components/Drawer";
import SkeletonLoader from "../../components/Loader/SkeletonLoader";

function InterviewPrep() {
  const { sessionId } = useParams();

  const [sessionData, setSessionData] = useState(null);
  const [questionsList, setQuestionsList] = useState([]); // ✅ NEW

  const [errMsg, setErrMsg] = useState("");
  const [openLeanMoreDrawer, setOpenLeanMoreDrawer] = useState(false);
  const [explanation, setExplanation] = useState(null);

  const [isLoading, setIsLoading] = useState(false);
  const [isUpdatedLoader, setIsUpdatedLoader] = useState(false);
  const [isQuestionsLoading, setIsQuestionsLoading] = useState(true);

  const fetchSessionById = async () => {
    try {
      setIsQuestionsLoading(true);

      const response = await axiosInstance.get(
        API_PATHS.SESSION.GET_ONE(sessionId)
      );

      if (response.data && response.data.session) {
        const session = response.data.session;
        setSessionData(session);

        // ✅ sync local list
        const sorted = [...session.questions].sort(
          (a, b) => b.isPinned - a.isPinned
        );
        setQuestionsList(sorted);
      }
    } catch (e) {
      console.error("error: ", e);
    } finally {
      setIsQuestionsLoading(false);
    }
  };

  const generateConceptExplanation = async (question) => {
    try {
      setErrMsg("");
      setExplanation(null);
      setIsLoading(true);
      setOpenLeanMoreDrawer(true);

      const response = await axiosInstance.post(
        API_PATHS.AI.GENERATE_EXPLANATION,
        { question }
      );

      if (response.data) {
        setExplanation(response.data);
      }
    } catch (e) {
      setExplanation(null);
      setErrMsg("Failed to generate explanation, Try again later");
    } finally {
      setIsLoading(false);
    }
  };

  const uploadMoreQuestions = async () => {
    try {
      setIsUpdatedLoader(true);

      const aiResponse = await axiosInstance.post(
        API_PATHS.AI.GENERATE_QUESTIONS,
        {
          role: sessionData?.role,
          experience: sessionData?.experience,
          topicsToFocus: sessionData?.topicsToFocus,
          numberOfQuestions: 10,
        }
      );

      const generatedQuestions = aiResponse.data;

      const response = await axiosInstance.post(
        API_PATHS.QUESTION.ADD_TO_SESSION,
        {
          sessionId,
          questions: generatedQuestions,
        }
      );

      if (response.data) {
        toast.success("Added More Q&A !!");
        fetchSessionById();
      }
    } catch (e) {
      console.error(e);
    } finally {
      setIsUpdatedLoader(false);
      setIsLoading(false);
    }
  };

  // ✅ FIXED PIN FUNCTION (NO REFETCH)
  const toggleQuestionPinStatus = (questionId) => {
    setQuestionsList((prev) => {
      const updated = prev.map((q) =>
        q._id === questionId ? { ...q, isPinned: !q.isPinned } : q
      );

      return [...updated].sort((a, b) => b.isPinned - a.isPinned);
    });

    // backend (silent)
    axiosInstance.post(API_PATHS.QUESTION.PIN(questionId)).catch(() => {});
  };

  useEffect(() => {
    if (sessionId) {
      fetchSessionById();
    }
  }, []);

  return (
    <DashboardLayout>
      <RoleInfoHeader
        role={sessionData?.role || ""}
        topicsToFocus={sessionData?.topicsToFocus || ""}
        experience={sessionData?.experience || "-"}
        questions={sessionData?.questions?.length || "-"}
        description={sessionData?.description || ""}
        lastUpdated={
          sessionData?.updatedAt
            ? moment(sessionData.updatedAt).format("Do MMM YYYY")
            : ""
        }
      />

      <div className="container mx-auto pt-4 pb-4 px-4 md:px-17">
        <h2 className="text-lg font-semibold color-black">Interview Q & A</h2>

        <div className="grid grid-cols-12 gap-4 mt-5 mb-10">
          <div
            className={`col-span-12 ${
              openLeanMoreDrawer ? "md:col-span-7" : "md:col-span-8"
            }`}
          >
            <AnimatePresence>
              {isQuestionsLoading ? (
                Array.from({ length: 5 }).map((_, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.08 }}
                  >
                    {/* SAME SKELETON (UNCHANGED) */}
                    <div className="relative mb-5 rounded-2xl p-[1px] overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-300 via-purple-300 to-pink-300 opacity-40 blur-sm"></div>

                      <div className="relative bg-white rounded-xl px-5 py-4 border border-gray-200 shadow-sm">
                        <div className="flex items-start justify-between">
                          <div className="flex items-start gap-3.5 w-full">
                            <div className="relative w-8 h-8 rounded-full bg-gray-200 overflow-hidden">
                              <div className="absolute inset-0 shimmer"></div>
                            </div>

                            <div className="flex-1 space-y-2">
                              <div className="h-3 rounded bg-gray-200 w-3/4 relative overflow-hidden">
                                <div className="shimmer"></div>
                              </div>
                              <div className="h-3 rounded bg-gray-100 w-1/2 relative overflow-hidden">
                                <div className="shimmer"></div>
                              </div>
                            </div>
                          </div>

                          <div className="w-20 h-8 rounded-full bg-gray-200 relative overflow-hidden">
                            <div className="shimmer"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))
              ) : (
                questionsList.map((data, index) => (
                  <motion.div
                    key={data._id || index}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 0.95 }}
                    transition={{
                      duration: 0.4,
                      type: "spring",
                      stiffness: 100,
                      delay: index * 0.1,
                      damping: 15,
                    }}
                    layout
                    layoutId={`question-${data._id || index}`}
                  >
                    <>
                      <QuestionCard
                        question={data?.question}
                        answer={data?.answer}
                        onLearnMore={() =>
                          generateConceptExplanation(data.question)
                        }
                        isPinned={data?.isPinned}
                        onTogglePin={() =>
                          toggleQuestionPinStatus(data._id)
                        }
                      />

                      {!isLoading &&
                        questionsList.length == index + 1 && (
                          <div className="flex items-center justify-center mt-5">
                            <button
                              className="flex items-center gap-3 text-sm text-white font-medium bg-black px-5 py-2 mr-2 rounded text-nowrap cursor-pointer"
                              disabled={isLoading || isUpdatedLoader}
                              onClick={uploadMoreQuestions}
                            >
                              {isUpdatedLoader ? (
                                <SpinnerLoader />
                              ) : (
                                <LuListCollapse className="text-lg" />
                              )}{" "}
                              Learn More
                            </button>
                          </div>
                        )}
                    </>
                  </motion.div>
                ))
              )}
            </AnimatePresence>
          </div>
        </div>

        <Drawer
          isOpen={openLeanMoreDrawer}
          onClose={() => setOpenLeanMoreDrawer(false)}
          title={!isLoading && explanation?.title}
        >
          {errMsg && (
            <p className="flex gap-2 text-sm text-amber-500 font-medium">
              <LuCircleAlert className="mt-1" /> {errMsg}
            </p>
          )}
          {isLoading && <SkeletonLoader />}
          {!isLoading && explanation && (
            <AIResponsePreview content={explanation?.explanation} />
          )}
        </Drawer>
      </div>
    </DashboardLayout>
  );
}

export default InterviewPrep;