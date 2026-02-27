const grid = document.querySelector('.pricing__grid');
const plans = document.querySelectorAll('.plan');

function updateActive() {
  if (window.innerWidth <= 768) {
    plans.forEach((p) => p.classList.remove('plan--active'));
    return;
  }

  const gridCenter = grid.scrollLeft + grid.offsetWidth / 2;

  let closest = null;
  let minDist = Infinity;

  plans.forEach((plan) => {
    const planCenter = plan.offsetLeft + plan.offsetWidth / 2;
    const dist = Math.abs(gridCenter - planCenter);
    if (dist < minDist) {
      minDist = dist;
      closest = plan;
    }
  });

  plans.forEach((p) => p.classList.remove('plan--active'));
  if (closest) closest.classList.add('plan--active');
}

grid.addEventListener('scroll', updateActive, { passive: true });
window.addEventListener('resize', updateActive);

updateActive();
