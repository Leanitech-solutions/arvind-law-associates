import Link from 'next/link';
import React from 'react';

export default function Breadcrumb({ title, paths, bgImage = "/assets/img/bg-img/73.jpg" }) {
  return (
    <div className="relative bg-surface-container-lowest py-12 text-center border-b border-outline-variant/20 overflow-hidden">
      <div className="absolute inset-0 opacity-10 bg-cover bg-center" style={{backgroundImage: `url("${bgImage}")`}}></div>
      
      {/* Decorative gradient overlay for premium feel */}
      <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest to-transparent"></div>
      
      <div className="relative max-w-container-max mx-auto px-gutter z-10" >
        <h1 className="font-display-md text-display-md text-primary mb-3 max-w-3xl mx-auto drop-shadow-sm">{title}</h1>
        <ul className="flex justify-center items-center gap-3 font-label-caps text-label-caps uppercase tracking-widest text-on-surface-variant flex-wrap">
          <li><Link className="hover:text-primary transition-colors" href="/">Home</Link></li>
          {paths.map((path, index) => (
            <React.Fragment key={index}>
              <li className="text-tertiary-fixed-dim/50">-</li>
              {path.href ? (
                <li><Link className="hover:text-primary transition-colors" href={path.href}>{path.name}</Link></li>
              ) : (
                <li className="text-tertiary-fixed-dim line-clamp-1 max-w-[200px] md:max-w-none font-bold">{path.name}</li>
              )}
            </React.Fragment>
          ))}
        </ul>
      </div>
    </div>
  );
}
