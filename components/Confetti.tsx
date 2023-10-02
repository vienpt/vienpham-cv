import Confetti from 'canvas-confetti'
import React from "react";

interface Props {
  isShowConfetti: boolean
  promise: Promise<unknown>
  children: React.ReactNode
}

function createConfetti() {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  Confetti.create(null, {
    resize: true,
    useWorker: true,
  })({
    particleCount: 200,
    spread: 200,
  });

  console?.log('ready.');
}

export default function ConfettiLayout({ isShowConfetti, promise, children }: Props) {

  if (isShowConfetti) {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    Confetti.Promise = promise
    Confetti()
    createConfetti()
  }

  return (
    <>
      {children}
      {/*{isShowConfetti && Confetti}*/}
    </>
  )
}