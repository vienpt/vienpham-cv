import Confetti from 'canvas-confetti'

function createConfetti() {
  Confetti.create(null, {
    resize: true,
    useWorker: true,
  })({
    particleCount: 200,
    spread: 200,
  });

  console?.log('ready.');
}

export default function ConfettiLayout({ isShowConfetti, promise }) {

  if (isShowConfetti) {
    Confetti.Promise = promise
    Confetti()
    createConfetti()
  }

  return (
    <>
      {isShowConfetti && <Confetti />}
    </>
  )
}