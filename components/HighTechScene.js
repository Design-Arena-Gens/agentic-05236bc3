import React from 'react';

export default function HighTechScene() {
  return (
    <svg
      viewBox="0 0 1200 800"
      role="img"
      aria-labelledby="high-tech-city-scene"
    >
      <title id="high-tech-city-scene">
        Avatar in a white shirt and Popeye sharing a giant pizza on a bench in a Swiss high-tech city street.
      </title>
      <defs>
        <linearGradient id="skyGradient" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#0a1e4f" />
          <stop offset="60%" stopColor="#112c68" />
          <stop offset="100%" stopColor="#1c3a7a" />
        </linearGradient>
        <linearGradient id="benchWood" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#885639" />
          <stop offset="70%" stopColor="#b37447" />
        </linearGradient>
        <linearGradient id="pizzaCheese" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#ffd36b" />
          <stop offset="100%" stopColor="#ffae3d" />
        </linearGradient>
        <linearGradient id="avatarShirt" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="100%" stopColor="#d7e1ff" />
        </linearGradient>
        <linearGradient id="swissGlow" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="rgba(120,180,255,0.7)" />
          <stop offset="100%" stopColor="rgba(70,130,255,0.1)" />
        </linearGradient>
        <radialGradient id="streetLight" cx="0.5" cy="0" r="1">
          <stop offset="0%" stopColor="rgba(180,220,255,0.7)" />
          <stop offset="100%" stopColor="rgba(10,20,45,0)" />
        </radialGradient>
        <filter id="glow">
          <feGaussianBlur stdDeviation="12" result="blur" />
          <feBlend in="SourceGraphic" in2="blur" mode="screen" />
        </filter>
      </defs>

      <rect x="0" y="0" width="1200" height="800" fill="url(#skyGradient)" />

      <g filter="url(#glow)" opacity="0.5">
        <ellipse cx="950" cy="140" rx="160" ry="120" fill="url(#swissGlow)" />
        <ellipse cx="240" cy="120" rx="200" ry="140" fill="url(#swissGlow)" />
      </g>

      <g opacity="0.75">
        <path
          d="M0 420 L100 360 L180 380 L260 330 L380 360 L500 300 L620 360 L780 280 L920 340 L1040 320 L1200 360 L1200 800 L0 800 Z"
          fill="#12264d"
        />
        <path
          d="M60 400 L140 340 L220 360 L300 310 L420 340 L560 290 L700 340 L860 260 L1000 310 L1120 300 L1200 330 L1200 800 L60 800 Z"
          fill="#19305c"
        />
        <path
          d="M140 360 L220 300 L300 320 L400 270 L520 300 L640 260 L820 300 L980 250 L1200 280 L1200 800 L140 800 Z"
          fill="#1f3e72"
        />
      </g>

      <g opacity="0.4">
        <rect x="150" y="180" width="80" height="200" fill="#5f7ab5" />
        <rect x="260" y="220" width="100" height="240" fill="#48659b" />
        <rect x="400" y="160" width="120" height="280" fill="#3a5584" />
        <rect x="560" y="210" width="110" height="260" fill="#5974a8" />
        <rect x="720" y="180" width="150" height="300" fill="#425a8b" />
        <rect x="910" y="200" width="130" height="280" fill="#4b6396" />
      </g>

      <g opacity="0.7">
        <rect x="180" y="600" width="840" height="60" rx="18" fill="#111c33" />
        <rect x="0" y="650" width="1200" height="150" fill="#091427" />
        <path
          d="M0 650 C200 620 420 630 600 640 C780 650 1020 660 1200 620 L1200 800 L0 800 Z"
          fill="#0d1429"
        />
      </g>

      <g>
        <rect x="420" y="540" width="360" height="26" rx="12" fill="url(#benchWood)" />
        <rect x="420" y="500" width="360" height="20" rx="10" fill="url(#benchWood)" />
        <rect x="420" y="460" width="360" height="18" rx="9" fill="url(#benchWood)" />
        <g fill="#0d1730">
          <rect x="430" y="566" width="22" height="88" rx="8" />
          <rect x="750" y="566" width="22" height="88" rx="8" />
        </g>
      </g>

      <g>
        <path
          d="M622 508 C605 520 588 540 584 552 C578 572 588 600 612 612 C636 624 666 618 686 604 C706 590 716 566 710 544 C704 522 684 510 662 504 C642 498 630 498 622 508 Z"
          fill="url(#pizzaCheese)"
        />
        <path
          d="M634 534 C644 540 654 556 652 566 C650 576 634 584 620 580 C606 576 598 558 604 546 C610 534 624 528 634 534 Z"
          fill="#e24b3a"
          opacity="0.8"
        />
        <path
          d="M666 532 C678 530 694 538 702 550 C710 562 708 580 694 590 C680 600 660 598 650 586 C640 574 642 554 652 544 C658 538 662 534 666 532 Z"
          fill="#d53f33"
          opacity="0.72"
        />
        <circle cx="646" cy="550" r="12" fill="#bb2a21" opacity="0.75" />
        <circle cx="612" cy="566" r="11" fill="#bb2a21" opacity="0.75" />
        <circle cx="686" cy="562" r="10" fill="#bb2a21" opacity="0.75" />
        <path
          d="M622 508 C636 502 660 504 678 512 C696 520 724 534 726 554 C728 574 694 594 660 602 C626 610 588 606 572 588 C556 570 572 534 588 520 C604 506 608 514 622 508 Z"
          fill="none"
          stroke="#f8a62b"
          strokeWidth="6"
          strokeLinecap="round"
        />
      </g>

      <g>
        <g>
          <ellipse cx="736" cy="470" rx="46" ry="60" fill="#1f2b44" />
          <path
            d="M736 410 C756 406 774 424 776 446 C778 468 764 488 744 494 C724 500 702 490 694 472 C686 454 698 428 716 415 C724 410 728 413 736 410 Z"
            fill="#f7c799"
          />
          <path
            d="M720 404 C732 392 756 388 772 404 C788 420 780 452 758 460 C736 468 716 450 712 432 C710 420 714 410 720 404 Z"
            fill="#f2d6a3"
          />
          <path
            d="M706 392 C720 378 752 368 772 380 C792 392 798 422 790 444 C782 466 758 480 734 476 C710 472 696 446 698 422 C700 402 702 398 706 392 Z"
            fill="#111b33"
          />
          <path d="M698 422 C708 422 720 430 742 432 C764 434 786 428 792 420 C786 444 772 458 750 460 C728 462 708 452 698 434 C696 426 696 424 698 422 Z" fill="#f7c799" />
          <path
            d="M694 472 C706 486 722 490 738 492 L730 508 C724 520 706 532 690 528 C674 524 668 506 670 492 C672 480 684 466 694 472 Z"
            fill="#f7c799"
          />
          <path d="M732 404 L758 402 L748 392 L724 394 Z" fill="#f7c799" />
          <path
            d="M688 516 C706 528 722 526 736 522 C750 518 770 512 776 520 C784 532 766 544 754 548 C728 558 698 556 674 542 C660 534 658 518 668 510 C678 502 678 504 688 516 Z"
            fill="#16223a"
          />
        </g>

        <g>
          <path
            d="M540 418 C520 420 500 434 494 454 C488 474 496 498 512 506 C528 514 560 508 564 494 C568 480 552 470 546 456 C540 442 546 416 540 418 Z"
            fill="#f0c6a0"
          />
          <path
            d="M534 386 C514 388 488 406 480 430 C472 454 484 484 508 488 C532 492 560 470 566 446 C572 422 556 384 534 386 Z"
            fill="#f0d9b9"
          />
          <path
            d="M522 370 C500 368 470 380 456 400 C442 420 442 448 460 468 C478 488 514 498 542 488 C570 478 590 448 584 420 C578 392 548 372 522 370 Z"
            fill="#1b2744"
          />
          <path d="M456 400 C460 426 480 438 510 438 C540 438 560 424 566 402 C542 420 480 420 456 400 Z" fill="#f0c6a0" />
          <path d="M552 418 C564 430 578 448 580 470 C582 492 564 516 542 520 C520 524 492 510 484 494 C476 478 496 462 516 460 C536 458 540 406 552 418 Z" fill="#f0c6a0" />
          <path
            d="M492 486 C514 488 536 494 552 504 C568 514 584 534 576 544 C566 558 528 552 504 538 C480 524 462 498 470 488 C478 478 476 484 492 486 Z"
            fill="#101b31"
          />
        </g>
      </g>

      <g>
        <path
          d="M380 620 C420 612 460 610 500 614 C540 618 580 628 620 628 C660 628 700 618 740 612 C780 606 820 604 860 610 C900 616 940 632 980 640 L980 664 L220 664 L220 640 C260 632 300 628 340 624 C360 622 360 624 380 620 Z"
          fill="#1a2746"
        />
        <ellipse cx="900" cy="560" rx="40" ry="18" fill="rgba(110,188,255,0.3)" />
        <ellipse cx="300" cy="540" rx="30" ry="14" fill="rgba(140,210,255,0.25)" />
      </g>

      <g opacity="0.6">
        <circle cx="1020" cy="240" r="34" fill="url(#streetLight)" />
        <circle cx="190" cy="210" r="42" fill="url(#streetLight)" />
      </g>
    </svg>
  );
}
